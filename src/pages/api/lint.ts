import { TextlintKernel } from "@textlint/kernel";
import TextPlugin from "@textlint/textlint-plugin-text";
import GeneralNovelStyle from "textlint-rule-general-novel-style-ja";
import JaNoRedundantExpression from "textlint-rule-ja-no-redundant-expression";
import MaxTen from "textlint-rule-max-ten";
import NoStartDuplicatedConjunction from "textlint-rule-no-start-duplicated-conjunction";
import NoDoubledJoshi from "textlint-rule-no-doubled-joshi";
import NoDoubleNegativeJa from "textlint-rule-no-double-negative-ja";
import NoDoubledConjunctiveParticleGa from "textlint-rule-no-doubled-conjunctive-particle-ga";
import NoDoubledConjunction from "textlint-rule-no-doubled-conjunction";
import NoDroppingTheRa from "textlint-rule-no-dropping-the-ra";
import NoMixDearuDesumasu from "textlint-rule-no-mix-dearu-desumasu";
import NoNfd from "textlint-rule-no-nfd";
import NoHankakuKana from "textlint-rule-no-hankaku-kana";
import JaNoSuccessiveWord from "textlint-rule-ja-no-successive-word";
import NoInsertDroppingSa from "@textlint-ja/textlint-rule-no-insert-dropping-sa";
import JaUnnaturalAlphabet from "textlint-rule-ja-unnatural-alphabet";
import NoSynonyms from "@textlint-ja/textlint-rule-no-synonyms";
import NoDroppingI from "@textlint-ja/textlint-rule-no-dropping-i";
import JaNoMixedPeriod from "textlint-rule-ja-no-mixed-period";
import NoInsertRe from "@textlint-ja/textlint-rule-no-insert-re";
import NoMixedZenkakuAndHankakuAlphabet from "textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet";
import JaNoOrthographicVariants from "textlint-rule-ja-no-orthographic-variants";
import JaJoyoOrJinmeiyoKanji from "textlint-rule-ja-joyo-or-jinmeiyo-kanji";
import JaNoInappropriateWords from "textlint-rule-ja-no-inappropriate-words";
import JaNoAbusage from "textlint-rule-ja-no-abusage";
import PreferTariTari from "textlint-rule-prefer-tari-tari";

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
			// 一般的な小説のスタイルをチェック
			ruleId: "general-novel-style-ja",
			rule: GeneralNovelStyle
		},
		{
			// 冗長な表現をチェック
			ruleId: "ja-no-redundant-expression",
			rule: JaNoRedundantExpression
		},
		{
			// 一つの文中の「、」の数が10個を超えないかチェック
			ruleId: "max-ten",
			rule: MaxTen
		},
		{
			// 同じ接続詞が連続して使用されていないかチェック
			ruleId: "no-start-duplicated-conjunction",
			rule: NoStartDuplicatedConjunction
		},
		{
			// 同じ助詞が連続して使用されていないかチェック
			ruleId: "no-doubled-joshi",
			rule: NoDoubledJoshi
		},
		{
			// 二重否定をチェック
			ruleId: "no-double-negative-ja",
			rule: NoDoubleNegativeJa
		},
		{
			// 連続して「が」が使用されていないかチェック
			ruleId: "no-doubled-conjunctive-particle-ga",
			rule: NoDoubledConjunctiveParticleGa
		},
		{
			// 連続した接続詞をチェック
			ruleId: "no-doubled-conjunction",
			rule: NoDoubledConjunction
		},
		{
			// 「ら」の不適切な省略をチェック
			ruleId: "no-dropping-the-ra",
			rule: NoDroppingTheRa
		},
		{
			// ですます調とである調の混在をチェック
			ruleId: "no-mix-dearu-desumasu",
			rule: NoMixDearuDesumasu
		},
		{
			// 正規化形式D（NFD）による正規化をチェック
			ruleId: "no-nfd",
			rule: NoNfd
		},
		{
			// 半角カタカナの使用をチェック
			ruleId: "no-hankaku-kana",
			rule: NoHankakuKana
		},
		{
			// 「さ」の不適切な挿入をチェック
			ruleId: "no-insert-dropping-sa",
			rule: NoInsertDroppingSa
		},
		{
			// 不自然なアルファベットの使用をチェック
			ruleId: "ja-unnatural-alphabet",
			rule: JaUnnaturalAlphabet
		},
		{
			// 同義語の使用をチェック
			ruleId: "no-synonyms",
			rule: NoSynonyms
		},
		{
			// 「い」の不適切な省略をチェック
			ruleId: "no-dropping-i",
			rule: NoDroppingI
		},
		{
			// 句読点の混在をチェック
			ruleId: "ja-no-mixed-period",
			rule: JaNoMixedPeriod
		},
		{
			// 「れ」の不適切な挿入をチェック
			ruleId: "no-insert-re",
			rule: NoInsertRe
		},
		{
			// 全角と半角アルファベットの混在をチェック
			ruleId: "no-mixed-zenkaku-and-hankaku-alphabet",
			rule: NoMixedZenkakuAndHankakuAlphabet
		},
		{
			// 表記揺れをチェック
			ruleId: "ja-no-orthographic-variants",
			rule: JaNoOrthographicVariants
		},
		{
			// 不適切な言葉の使用をチェックします
			ruleId: "ja-no-inappropriate-words",
			rule: JaNoInappropriateWords
		},
		{
			// 誤用されている言葉をチェックします
			ruleId: "ja-no-abusage",
			rule: JaNoAbusage
		},
		{
			// 例示・並列表現の「～たり、（～たり）する」をチェックするルールです。 次の例のように、片方が「〜たり」表現なのにもかかわらず、もう片方の動詞が「〜たり」ではない場合をエラーとします。
			ruleId: "prefer-tari-tari",
			rule: PreferTariTari
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
