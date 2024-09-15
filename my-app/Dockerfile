# ベースイメージ
FROM node:16

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# 開発サーバーを起動するポート
EXPOSE 3000

# アプリケーションの起動
CMD ["npm", "start"]
