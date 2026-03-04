declare module '@microlink/react' {
    import { FC, CSSProperties } from 'react';

    interface MicrolinkProps {
        url: string;
        size?: 'small' | 'medium' | 'large';
        style?: CSSProperties;
        media?: string | string[];
        direction?: 'ltr' | 'rtl';
        contrast?: boolean;
        image?: string | string[];
        video?: boolean;
        audio?: boolean;
        sensitive?: boolean;
        autoPlay?: boolean;
        loop?: boolean;
        muted?: boolean;
        playsInline?: boolean;
        controls?: boolean;
        loading?: boolean;
        apiKey?: string;
        lazy?: boolean;
        ssr?: boolean;
        className?: string;
    }

    const Microlink: FC<MicrolinkProps>;
    export default Microlink;
}
