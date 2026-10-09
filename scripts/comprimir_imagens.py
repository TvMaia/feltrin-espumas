# -*- coding: utf-8 -*-
"""Gera as versões JPG que vão para o site a partir dos PNG originais.

Os PNG continuam na pasta como fonte: nada é apagado. O site referencia os
JPG, que pesam cerca de 16 vezes menos sem diferença visível em tela.
O favicon fica de fora porque precisa de fundo transparente.
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

from PIL import Image

PASTA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'img')
LARGURA_MAXIMA = 1800
QUALIDADE = 82
SEM_CONVERTER = {'favicon.png'}


def main():
    origem = sorted(n for n in os.listdir(PASTA) if n.endswith('.png') and n not in SEM_CONVERTER)
    if not origem:
        print('Nenhum PNG encontrado em', PASTA)
        return

    total_antes = total_depois = 0
    for nome in origem:
        caminho = os.path.join(PASTA, nome)
        destino = os.path.join(PASTA, nome[:-4] + '.jpg')
        antes = os.path.getsize(caminho)

        imagem = Image.open(caminho).convert('RGB')
        if imagem.width > LARGURA_MAXIMA:
            altura = round(imagem.height * LARGURA_MAXIMA / imagem.width)
            imagem = imagem.resize((LARGURA_MAXIMA, altura), Image.LANCZOS)
        imagem.save(destino, 'JPEG', quality=QUALIDADE, optimize=True, progressive=True)

        depois = os.path.getsize(destino)
        total_antes += antes
        total_depois += depois
        print('%-34s %6.2f MB -> %5.2f MB   %d x %d' % (nome, antes / 1048576, depois / 1048576, imagem.width, imagem.height))

    print()
    print('Total: %.1f MB -> %.1f MB (%.0f%% menor)'
          % (total_antes / 1048576, total_depois / 1048576, 100 * (1 - total_depois / total_antes)))


if __name__ == '__main__':
    main()
