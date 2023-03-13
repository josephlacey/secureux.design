import { FC, PropsWithChildren } from "react";
import dynamic from 'next/dynamic';

type DefinitionProps = PropsWithChildren<{ id: string, darkColor: string }>;

const DynamicDefinition = dynamic(() => import('./InternalDefinition').then((mod) => mod.InternalDefinition), {
  ssr: false,
});

export const Definition: FC<DefinitionProps> = ({ id, darkColor, children }) => (
  <DynamicDefinition id={id} darkColor={darkColor}>
    {children}
  </DynamicDefinition>
)
