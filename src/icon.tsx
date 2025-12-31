// src/app/icon.tsx
import { ImageResponse } from 'next/og';

// Configuração da rota
export const runtime = 'edge';

// Tamanho da imagem (padrão para favicons)
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Geração da imagem
export default function Icon() {
  // Cores baseadas no seu tema (Dark mode background e Primary blue)
  const background = '#020817'; // Cor de fundo escura
  const primary = '#3b82f6';    // Cor azul de destaque (aproximada do seu tema)
  const text = '#ffffff';       // Cor branca

  return new ImageResponse(
    (
      // Elemento JSX que vira imagem
      <div
        style={{
          fontSize: 18, // Tamanho da fonte ajustado para o quadrado 32x32
          background: background,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          borderRadius: '6px', // Bordas levemente arredondadas
          letterSpacing: '-1px',
        }}
      >
        <span style={{ color: primary, marginRight: '1px' }}>&lt;</span>
        <span style={{ color: text }}>PH</span>
        <span style={{ color: primary, marginLeft: '1px' }}>/&gt;</span>
      </div>
    ),
    {
      ...size,
    }
  );
}