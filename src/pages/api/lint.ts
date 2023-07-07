import { TextlintKernel } from "@textlint/kernel";
import TextPlugin from "@textlint/textlint-plugin-text";
import GeneralNovelStyle from "textlint-rule-general-novel-style-ja";
import JaNoRedundantExpression from "textlint-rule-ja-no-redundant-expression";
import MaxTen from "textlint-rule-max-ten";
import NoStartDuplicatedConjunction from "textlint-rule-no-start-duplicated-conjunction";
import NoDoubledJoshi from "textlint-rule-no-doubled-joshi";
import NoDoubleNegativeJa from "textlint-rule-no-double-negative-ja";

const kernel = new TextlintKernel();

const options = {
	filePath: "/path/to/file.txt",
	ext: ".txt",
	plugins: [
		{
			pluginId: "text",
			plugin: TextPlugin
		}
	],
	rules: [
		{
			ruleId: "general-novel-style-ja",
			rule: GeneralNovelStyle
		},
		{
			ruleId: "ja-no-redundant-expression",
			rule: JaNoRedundantExpression
		},
		{
			ruleId: "max-ten",
			rule: MaxTen
		},
		{
			ruleId: "no-start-duplicated-conjunction",
			rule: NoStartDuplicatedConjunction
		},
		{
			ruleId: "no-doubled-joshi",
			rule: NoDoubledJoshi
		},
		{
			ruleId: "no-double-negative-ja",
			rule: NoDoubleNegativeJa
		}
	]
};
export default async function handler(req, res) {
	try {
		const text = req.body.text;
		const result = await kernel.lintText(text, options);
		res.status(200).json({ result });
	} catch (error) {
		console.error(error); // サーバーサイドのコンソールにエラー詳細を表示
		res.status(500).json({ error: error.toString() }); // クライアントにエラー詳細を返す
	}
}
