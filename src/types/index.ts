export type Breakpoints = 'sm' | 'md' | 'lg' | 'xlg' | 'max';
export type BreakpointLength = {min: number; max: number};
export type BreakpointEntries = [Breakpoints, BreakpointLength][];

export type Media = Record<Breakpoints, {min: boolean; max: boolean}> & {current: string};

export type Scale = {width: number; height: number; font: number};

export type Orientation = 'horizontal' | 'vertical';
