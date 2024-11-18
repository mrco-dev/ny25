import React, { useEffect, useState } from "react";

interface SVGComponentProps {
  svgUrl: string;
}

function SVGComponent({ svgUrl }: SVGComponentProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(svgUrl);
        if (response.ok) {
          const svgText = await response.text();
          setSvgContent(svgText);
        } else {
          console.error("Failed to load SVG:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSVG();
  }, [svgUrl]);

  if (!svgContent) {
    return <div>Loading...</div>; // Placeholder while loading
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} aria-hidden="true" />
  );
}

export default React.memo(SVGComponent);
