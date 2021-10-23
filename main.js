const dictionary = [
    {
        word:"õun",
        translation:"яблык",
        rel:["õuna","õunad"]
    },
    {
        word:"pall",
        translation:"мяч",
        rel:["palli","pallid"]
    },
    {
        word:"banaan",
        translation:"банан",
        rel:["banaani","banaanid"]
    }

];

// fill the dictionary with words
init = function(){
    for (let i = 0; i < dictionary.length; i++){
        document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + 
        dictionary[i].word + "</li>";
    }
}

//call the init functon when page loads
init();

// display a word, its translation and related words
show = function(i){
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('translation').innerHTML = dictionary[i].translation;

    let list = "";

    for(let j = 0; j < dictionary[i].rel.length; j++){
        list += "<li>" + dictionary[i].rel[j] + "</li>";
        document.getElementById('related').innerHTML = list;
    }
}

//show first word in the dictionary when page loads
show(0);

//search functionality
search = function(){
    query = document.getElementById('search').value;

    if(query == "") {
        return;
    }

    found = -1; //initialize found to false

    for (let i = 0; i < dictionary.length; i++){
        if (query == dictionary[i].word) {
            found = i;
            break;
        } else {
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('translation').innerHTML = "The word you entered is not found in our dictionary";
            document.getElementById('related').innerHTML = "No relared words";
        }
0       
    }

    if (found >= 0) {
        show(found);
    }
}