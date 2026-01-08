export const fetchPosts = async (): Promise<any[]> => {
  const response = await fetch(
    "https://dev.to/api/articles?username=baraa"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};
