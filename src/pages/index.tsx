import { useState } from "react";
import { Box, Button, Text, useColorModeValue, Heading } from "@chakra-ui/react";

const Textlint = () => {
	const text =
		"彼は突然、言った。「僕はアーティストになりたいんだ。でも、この現－実は厳…しくて、なかなか思うように事--が運ばないかったり、うまくいかなかったり、あれしたかったり、だからそこにいれる。で、も、そ、れ、が、ア、ート、だ、と、思、う、ん、だ。それ-ｼﾄｷﾞﾃﾞﾝに　粢田、それに、あんまり金を気にしてしまうと、純粋な表現ができなくなっちゃうからさ。」彼はそう言いながら、眼差しは遠くの未来を見ていた。その姿は、まるで追い求める何かがあるかのように見えた。そして、彼は続けた。「それに、自分が一番素晴らしいと思う作品を、誰かに否定されるのは辛い。でも、そういうものだと思う。だって、アートは感じるものだからさ。だから、僕はアーティストになりたいんだ。」彼はそう言って、強く自分自身を信じることを決めた。";
	const [result, setResult] = useState([]);

	const handleCheckText = async () => {
		try {
			const response = await fetch("/api/lint", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text })
			});
			if (response.status === 500) {
				const data = await response.json();
				console.error("Server error:", data.error);
				return;
			}
			if (response.status === 200) {
				console.log("Success");
			}
			const data = await response.json();
			if (data && data.result && Array.isArray(data.result.messages)) {
				setResult(data.result.messages);
			} else {
				setResult([]);
			}
		} catch (error) {
			console.error(error);
			setResult([]);
		}
	};
	const boxBg = useColorModeValue("gray.50", "gray.800");

	return (
		<Box p={{ base: "4", md: "6" }} h={"90vh"} w={"100%"} overflowY={"scroll"}>
			<Heading as="h1" size="lg" textAlign={"center"} mb={6}>
				自動校正ツール
			</Heading>

			<Button onClick={handleCheckText} colorScheme="teal" variant="solid" mt="4" w={"100%"}>
				自動校正検査を実行する
			</Button>

			<Box mt="6" p="4" bg={boxBg} borderRadius="md">
				{result.length < 1 ? (
					<Text>校正指摘合計数：0箇所</Text>
				) : (
					<>
						<Text mb="4" color={"red"}>
							校正指摘合計数：{result.length}箇所
						</Text>
						{result.map((item, index) => {
							let fixText = item.fix ? item.fix.text : "修正提案なし";
							if (fixText === " ") fixText = "半角スペースに修正";
							else if (fixText === "　") fixText = "全角スペースに修正";
							return (
								<Box key={index} border="1px solid" borderColor={"red.500"} p="4" borderRadius="md" mb="2" bg={boxBg}>
									<Text>
										校正箇所：{item.loc.start.line}行{item.loc.start.column}文字目
									</Text>
									<Text>指摘理由：{item.message}</Text>
									<Text>修正提案：{fixText}</Text>
								</Box>
							);
						})}
					</>
				)}
			</Box>
		</Box>
	);
};
export const getStaticProps = async () => {
	return {
		props: {
			data: "This is static data"
		}
	};
};
export default Textlint;
