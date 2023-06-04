import React from 'react';

export interface ChildlessBaseComponent {
    className?: string;
    style?: React.CSSProperties;
}

export interface BaseComponent extends ChildlessBaseComponent {
    children: React.ReactNode;
}

export interface OptionalChildrenBaseComponent extends ChildlessBaseComponent {
    children?: React.ReactNode | React.ReactNode[];
}
