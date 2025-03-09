'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FaImage, FaExclamationTriangle } from 'react-icons/fa';

interface Props {
  children: ReactNode;
  type?: 'image' | 'general';
  fallbackText?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static defaultProps = {
    type: 'image',
    fallbackText: '잠시 후 다시 시도해주세요'
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary 캐치:', error, errorInfo);
  }

  public render() {
    const { type, fallbackText } = this.props;
    
    if (this.state.hasError) {
      return (
        <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            {type === 'image' ? (
              <FaImage className="mx-auto text-gray-400 text-4xl mb-4" />
            ) : (
              <FaExclamationTriangle className="mx-auto text-amber-500 text-4xl mb-4" />
            )}
            <h2 className="text-gray-600 font-medium mb-2">
              {type === 'image' ? '이미지를 불러올 수 없습니다' : '오류가 발생했습니다'}
            </h2>
            <p className="text-gray-500 text-sm">{fallbackText}</p>
          </div>
          <div className="absolute inset-0 bg-gray-200 opacity-10"></div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 