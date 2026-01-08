"use client";

import { useToast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/ui";
import { Badge } from "@/shared/ui/";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/";
import { Textarea } from "@/shared/ui/";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Loader2, RefreshCw, Sparkles, X } from "lucide-react";
import { useState } from "react";

interface AITextEnhancerProps {
  originalText: string;
  onTextUpdate: (newText: string) => void;
  type: "hero" | "footer" | "project" | "experience";
  placeholder?: string;
  className?: string;
}

export function AITextEnhancer({
  originalText,
  onTextUpdate,
  type,
  placeholder = "Enter text to enhance...",
  className = "",
}: AITextEnhancerProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enhancedText, setEnhancedText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [variations, setVariations] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<
    "enhance" | "suggestions" | "variations"
  >("enhance");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleAIAction = async (
    action: "enhance" | "suggestions" | "variations",
  ) => {
    if (!originalText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text first",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/ai/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: originalText,
          type,
          action,
        }),
      });

      const data = await response.json();

      if (data.success) {
        switch (action) {
          case "enhance":
            setEnhancedText(data.data.enhancedText);
            setActiveTab("enhance");
            break;
          case "suggestions":
            setSuggestions(data.data.suggestions);
            setActiveTab("suggestions");
            break;
          case "variations":
            setVariations(data.data.variations);
            setActiveTab("variations");
            break;
        }

        if (!isOpen) setIsOpen(true);

        toast({
          title: "Success",
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("AI enhancement error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to enhance text",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, index?: number) => {
    try {
      await navigator.clipboard.writeText(text);
      if (index !== undefined) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
      toast({
        title: "Copied",
        description: "Text copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy text",
        variant: "destructive",
      });
    }
  };

  const applyText = (text: string) => {
    onTextUpdate(text);
    setIsOpen(false);
    toast({
      title: "Applied",
      description: "Text has been updated",
    });
  };

  const getTypeLabel = () => {
    switch (type) {
      case "hero":
        return "Hero Section";
      case "footer":
        return "Footer";
      case "project":
        return "Project";
      case "experience":
        return "Experience";
      default:
        return "Content";
    }
  };

  return (
    <div className={className}>
      {/* AI Enhancement Trigger Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          onClick={() => handleAIAction("enhance")}
          disabled={loading}
          size="sm"
          className="bg-gradient-to-r from-[var(--button)] to-[var(--button2)] text-white  "
        >
          {loading && activeTab === "enhance" ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4 mr-2" />
          )}
          Enhance with AI
        </Button>

        {/* <Button
          onClick={() => handleAIAction("suggestions")}
          disabled={loading}
          size="sm"
          variant="outline"
        >
          {loading && activeTab === "suggestions" ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Lightbulb className="h-4 w-4 mr-2" />
          )}
          Get Suggestions
        </Button> */}

        {/* <Button
          onClick={() => handleAIAction("variations")}
          disabled={loading}
          size="sm"
          variant="outline"
        >
          {loading && activeTab === "variations" ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Wand2 className="h-4 w-4 mr-2" />
          )}
          Generate Variations
        </Button> */}
      </div>

      {/* AI Results Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-[var(--card-background)] border-[var(--card-border-color)] shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[var(--card-headline)] flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    AI Enhanced {getTypeLabel()}
                  </CardTitle>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-[var(--paragraph)]"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => setActiveTab("enhance")}
                    variant={activeTab === "enhance" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeTab === "enhance" ? "bg-purple-500 text-white" : ""
                    }
                  >
                    Enhanced Text
                  </Button>
                  <Button
                    onClick={() => setActiveTab("suggestions")}
                    variant={
                      activeTab === "suggestions" ? "default" : "outline"
                    }
                    size="sm"
                    className={
                      activeTab === "suggestions"
                        ? "bg-blue-500 text-white"
                        : ""
                    }
                  >
                    Suggestions
                  </Button>
                  <Button
                    onClick={() => setActiveTab("variations")}
                    variant={activeTab === "variations" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeTab === "variations"
                        ? "bg-green-500 text-white"
                        : ""
                    }
                  >
                    Variations
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Enhanced Text Tab */}
                {activeTab === "enhance" && enhancedText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <Textarea
                        value={enhancedText}
                        onChange={(e) => setEnhancedText(e.target.value)}
                        className="min-h-32 bg-[var(--input-background)] border-[var(--input-border-color)] text-[var(--input-text)]"
                        placeholder="Enhanced text will appear here..."
                      />
                      <Button
                        onClick={() => copyToClipboard(enhancedText)}
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => applyText(enhancedText)}
                        className="bg-[var(--button)] text-[var(--button-text)]"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Apply Enhanced Text
                      </Button>
                      <Button
                        onClick={() => handleAIAction("enhance")}
                        variant="outline"
                        disabled={loading}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Suggestions Tab */}
                {activeTab === "suggestions" && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-[var(--card-headline)]">
                      AI Suggestions for Improvement:
                    </h4>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="p-3 bg-blue-50 border border-blue-200 rounded-md text-sm"
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Variations Tab */}
                {activeTab === "variations" && variations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-[var(--card-headline)]">
                      Alternative Versions:
                    </h4>
                    <div className="space-y-3">
                      {variations.map((variation, index) => (
                        <div
                          key={index}
                          className="p-3 bg-green-50 border border-green-200 rounded-md relative group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm flex-1">{variation}</p>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                onClick={() =>
                                  copyToClipboard(variation, index)
                                }
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                {copiedIndex === index ? (
                                  <Check className="h-3 w-3 text-green-600" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </Button>
                              <Button
                                onClick={() => applyText(variation)}
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                <Check className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            Version {index + 1}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Empty State */}
                {((activeTab === "enhance" && !enhancedText) ||
                  (activeTab === "suggestions" && suggestions.length === 0) ||
                  (activeTab === "variations" && variations.length === 0)) && (
                  <div className="text-center py-8 text-[var(--paragraph)]">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>
                      Click the buttons above to generate AI-enhanced content
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
