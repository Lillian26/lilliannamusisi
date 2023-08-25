import React from "react";

function article_1() {
	return {
		date: "Mar 5 2019",
		title: "Haskell — Good programming practices",
		description:
			"It's encouraged to write correct and effective code. This article highlights a few good practices",
		keywords: [
			"The Benefits of good coding practices",
			"Lillian",
			"Lillian N",
			"Lillian Namusisi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">originally published <a href="https://medium.com/@lilliannamusisi/haskell-good-programming-practices-25f1d1d7f13c">here</a></div>
					<img
						src="../code.png"
						alt="code"
						className="randImage"
					/>
					<span>
						we have been encouraged to write correct and effective code. This article highlights a few good practices:
						Correctness of types: In Haskell, there are types of variables and type signatures of functions. One should compile code after making changes to the program however small the change, check the signatures of the functions as well as the types. The compiler can also hint on a problem if not yet solved. One way to get these awesome clues is to type a 'hole' written as _ in the place of the thing you don't know and then the compiler shall tell you the type of statement needed. Fun fact: the types of variables and functions also have types! Let's keep this complicated concept for another day.
						Always check the types of things- it's okay to put parenthesis to know what you are applying to what function - Lars Brünjes.
						Testing: Just like other languages, Haskell has some libraries and test suites you can use to test if your solution covers all the possible scenarios and for different data that can be presented in a single problem. The quickcheck library allows you to define properties to use during tests run on various functions, the kind of error messages to present, and also define what kind of data to use (this is where one sets arbitrary sets of data and also how much that data is allowed to grow depending on its structure). You can use doctest which works using Haddock's documentation strings, but you can also import quickcheck library via dependencies in the cabal or yaml files. These are the two libraries I have used, but there are others on hackage to try out.
						Clean code: Always format your code, by using correct indentation, leave no unused code or imports, and also remove any other warnings that can appear on compiling the code. One should enable warnings in the cabal file to be able to see warnings in GHC interactive console. Another useful tool is HLint extension of GHC that can be downloaded with Visual Studio Code IDE. HLint helps to give suggestive hints on right syntax and styling.
						Tip: Simple Tests - compile everything in ghci to test for errors immediately after writing some line of code -see if there is something wrong, and fix it immediately
						Benchmarking: this is used when measuring the performance and behavior of the code of a given function in terms of execution time, standard deviation. The Criterion library is used often to generate detailed benchmark results, which comes in a HTML report too! With Criterion, one can define certain data to use preferably large data, default configurations (like the report title) for when running the bench mark. There is need to create a bench suite in the cabal file for a specific benchmark.
						One should add comments to all parts that are not immediately obvious. Please also pay attention to stylistic issues - Lars Brünjes.
						Documentation: Well documented code is easy to maintain, read, and understand since it has description of what exactly the code does; inputs, outputs, and necessary types required. It also comes with examples on how to implement certain features of code which can be a base for beginners or forgetful coders 😉. In Haskell, we use 'Haddock' syntax to build comments using symbols such as @ ,|. And then use a certain command in GHC to invoke haddock and generate pretty, well formatted documentation for the code.
					</span>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Lillian",
// 			"Lillian N",
// 			"Lillian Namusisi",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
