import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const DEFAULT_WIDTH = 300;

const SideBar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;

      const newWidth = e.clientX;
      setWidth(newWidth);
    },
    [isResizing]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={sidebarRef}
      className="relative h-full min-w-[300px] max-w-[600px] bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
      style={{ width: `${width}px` }}
    >
      {/* Resize handle */}
      <div
        className="absolute right-0 top-0 w-1 h-full bg-transparent hover:bg-blue-500 dark:hover:bg-blue-400"
        onMouseDown={handleMouseDown}
        role="separator"
        aria-label="Resize sidebar"
        tabIndex={0}
      />
    </div>
  );
};

export default SideBar;
