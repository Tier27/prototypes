dictionary.nouns = new Array("apple", "banana", "orange");
var nouns = new Array();
for( i = 0; i < dictionary.nouns.length; i++ ) {
	noun = new Noun(dictionary.nouns[i]);
	evalString = "var " + dictionary.nouns[i] + " = new Noun(dictionary.nouns[i])";
	eval(evalString);
	nouns.push(noun);	
}
