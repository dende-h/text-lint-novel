This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

この Next.js 製のアプリケーションは、ユーザーインターフェースを持たず、/api/lint への POST リクエストで与えられたプレーンテキストを textlint で校正し、その結果を返す機能を提供します。

Getting Started
開発サーバーを起動するには以下のコマンドを実行します:

bash
Copy code
npm run dev

# or

yarn dev

# or

pnpm dev
開発サーバーが起動したら、ブラウザで http://localhost:3000 にアクセスするとアプリケーションの状態を確認できます。

pages/index.tsx を編集することでアプリケーションの挙動を変更できます。ファイルを編集すると、ページは自動的に更新されます。

このアプリケーションでは pages/api ディレクトリが/api/\*にマップされます。このディレクトリ内のファイルは React のページではなく、API routes として扱われます。特に、pages/api/lint.ts が/api/lint エンドポイントにマップされ、textlint を用いたテキスト校正機能を提供します。

なお、このプロジェクトは next/font を使用して、カスタム Google フォントである Inter を自動的に最適化してロードします。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Lisence

This project is licensed under the MIT License, see the LICENSE.txt file for details
