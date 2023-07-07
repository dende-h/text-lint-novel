import { useState } from "react";
import { Box, Button, Text, useColorModeValue, Heading } from "@chakra-ui/react";

const Textlint = () => {
	const text =
		"そう、それは本当に素晴らしかったわ。だって、彼は彼女を一目見て恋に落ちたんだもの。その気持ちを胸に秘め、彼は自分自身の考えを再確認した。それから、スーツケースを持ち上げて、ドアを開けて、エレベーターを呼んで、ボタンを押して、部屋に入って、ライトをつけて、スーツケースを開けて、シャワーを浴びて、パジャマに着替えて、ベッドに入った。そして、そして、彼はその瞬間を思い出し、その事についてついて考え続けた。彼がこのように感じているのは、彼が彼女を決して忘れないことはないからだ。";
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
