# Dissertation  
## APRENDIZADO DE MÁQUINA APLICADO À CLASSIFICAÇÃO DE IMAGENS DE SATÉLITE PARA RESPOSTA A DESASTRES HIDROLÓGICOS

🔗 **Dissertação disponível em:** [Repositório INPE](http://mtc-m21d.sid.inpe.br/col/sid.inpe.br/mtc-m21d/2024/02.15.16.13/doc/thisInformationItemHomePage.html)

Este repositório contém os códigos e experimentos desenvolvidos no contexto da dissertação de mestrado focada na aplicação de técnicas de aprendizado de máquina e redes neurais para análise e classificação de imagens de satélite voltadas à resposta a desastres naturais, com ênfase em deslizamentos de terra e inundações.

---

## 📁 Estrutura dos Arquivos

### 🧠 Notebooks de Classificação com Deep Learning

- **`Training_Unet_Landslides_Charter_Sao_Sebastiao.ipynb`**  
  Treinamento de uma **Rede U-Net** para detecção de áreas de deslizamento na região de **São Sebastião (SP)**, utilizando imagens do projeto **International Charter – Space and Major Disasters**.

- **`Test_Landslides_Petropolis.ipynb`**  
  Aplicação do modelo gerado no dataset de teste da região de **Petrópolis (RJ)**, afetada por deslizamentos em 2022.

- **`Test_Landslides_Petropolis_Merged_patches_predict.ipynb`**  
  Aplicação do modelo gerado em **patches**, com classificação sobre a imagem da região de Petrópolis para melhor análise espacial.

### 🌍 Google Earth Engine (GEE) Scripts

- **`PortoVelhoROFloodClipRFAppGEE.JS`**  
  Script GEE de geração do modelo de classificação das áreas afetadas por inundações em **Porto Velho (RO)**, Brasil. A classificação utiliza o modelo de **Floresta Aleatória (Random Forest)** com imagens ópticas do **Landsat-8**.

- **`PakistanSindhClipModelRFLandsat8_AppGEE.JS`**  
  Script GEE que utiliza o modelo gerado para classificação de áreas afetadas por inundações na região de **Sindh, Paquistão**.

---

## ⚙️ Requisitos

- Google Colab ou ambiente Python com as seguintes bibliotecas:
  - TensorFlow
  - Keras
  - NumPy
  - Matplotlib
  - Rasterio
  - GDAL

- [Google Earth Engine](https://earthengine.google.com/)

---

## ▶️ Como usar

### 1. Notebooks de Treinamento e Teste

- Abra os arquivos `.ipynb` no [Google Colab](https://colab.research.google.com)
- Configure as células para carregar os dados
- Execute as células sequencialmente para treinar e/ou aplicar o modelo

### 2. Google Earth Engine Scripts

- Acesse [https://code.earthengine.google.com](https://code.earthengine.google.com)
- Importe os arquivos `.JS` para sua conta
- Execute os scripts nas regiões-alvo para visualizar e exportar os resultados da classificação

---

## 👤 Autor

**[Cesar Costa]**  
Programa de Pós-Graduação em Computação Aplicada – Instituto Nacional de Pesquisas Espaciais (INPE)  
Orientador: *[Thales Körting]*  
---

## 📄 Licença

Este projeto está licenciado sob os termos da Licença MIT. Veja o arquivo [LICENSE](https://github.com/CesarAugusto88/dissertation/blob/main/LICENSE) para mais detalhes.
