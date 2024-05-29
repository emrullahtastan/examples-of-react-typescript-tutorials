import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
    children: React.ReactNode,
    as?: React.ElementType,
    htmlFor?: string
};

type TextProps<E extends React.ElementType> =
    TextOwnProps<E>
    & Omit<React.ComponentProps<E>, keyof React.ComponentProps<E>>

export const Text = <E extends React.ElementType = 'div'>({size, color, children, as, htmlFor}: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    );
};
