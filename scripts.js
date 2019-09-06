document.addEventListener('contextmenu',e=>e.preventDefault());
cardsNumber=[16,20,24,36];
colors=['c55','55c','5c5','c5c'];
modal=document.getElementById('modal');
function modalF(){
	modal.classList.remove('none');
};
function modalN(){
	modal.classList.add('none');
};
audioButton=new Audio('data:audio/wav;base64,SUQzAwAAAAAAPlRTU0UAAAA0AAAATEFNRSAzMmJpdHMgdmVyc2lvbiAzLjk4LjIgKGh0dHA6Ly93d3cubXAzZGV2Lm9yZy8p//sUxAAABARY8jQRABCqlatnBFAAQD8eMf//kJzndAMXIRQ4su/vKLB8Rh8oGFghkChyTg+GYYYYYYYYAAB6tyU1cGE0ERXxcDsZH6WX+LgGY4EFg9Gj/6G+X/1OJvgY//sUxAAABJCbSrgigACZE6+3BFAChBIBAAVvRewUTq6GyKJFboLvQS/AYOsIr/aQqp/2+YSDXzhysDcDgeDQUDQcDgAAAADwaL9AnhManJV3/X8wsxxqqp2+pxH//uw8//sUxAAABDyfdhgjgACjlCorClAAZwJ+nlZuOp8iPG/wJpTkiDnONm53nKi1f1/QaGE5QDHvLgKKGIIJjAQgAAAAAYWfuJ1xVm8ylwGL/xn4uUpeb/EA6qL/+IsLCI6s//sUxAAABBhBahkFgACmA2yfkiAFxxuGaLu5BFjVyyT4fKZ+CIWB/Bz/sYqTnwHBnTioqe+kQZTtoAAuGULpSkssyQswGoQZ53TYXQVCb1D/Pine6Kbq3hT3V//wX06A//sUxAAARBghUyMMYrCOCuS0kyCcSAKunEAAwmZFLVkZm1ElRKt0TFjwlixIG3AzyuVd/1hoAglEyOAAQmZEQm3YAUBTlAJZKrfgpACjoWmZaZmJFbhqKFqTEFNRQAAA//sUxAACQ8QZCyCMQqiQiuOkwyT9AAAJ+AACTs2oUCFfGxTv/YN8J8XrBw37Apv/0VCKgNcAD1bBgea2vJx7PByd7/dg4XfjDCAIEH7AIAANhsnbRtzD0xBTUUzLjk4A');
audioCard=new Audio('data:audio/wav;base64,SUQzAwAAAAAAPlRTU0UAAAA0AAAATEFNRSAzMmJpdHMgdmVyc2lvbiAzLjk4LjIgKGh0dHA6Ly93d3cubXAzZGV2Lm9yZy8p//sUZAAJUGACPhAjGAgJgBh2AEEBgcAFJaSIYCAqgONIwIwEIAADJRwTYAP/46kVQAeAAX///qMgQACSCAceZ/9Li+no+9aKECA/B//pgekz9aYgpqKZlxycFxkAAAAA//sURAAB0DcAzCACEAwIoBjzAEABAoAFSaGIQDA1gWJAkYgGAAAAAn/8RAYAAAf///PCJQAAAb4bARSH/WD5cH8n5e8uiGKBI2EUWB5zJ5/E/8puKJiCmopmXHJwXGQA//sUZAAAAHQBzIVAYAAJIFmArAwBQoRxfhghAAAvAa3DDCAABcPprB8QP1FOn//uYf6DwJXEgr2w/80m1Afjp6p5m/Qx/eABD/+S4j8sYFc6uEC8Kbd/S3UK/tTEFNRQ//sUZAAAAG8GX4YMAAAM4GtgwwAAAiAVbBgwAAArgq0DHgAAKnkYcOpKJde3EJ3U7yUl9wc4LoMf+sRbYpWvIccWDAKgYnPkezzD+Nbd3alXVB7IrxLxYDv/WmIKaigA//sUZAAP8HIE1wc8QAAMwGrA7AAAAigVUgWYYEA1gyoBgYgYIdaeWk9twgK9v+RLavvBRnGtb1ZGhIAoTX/oBpdzxVFQFwZMRZLW5GsxF2qEiTvQShIyiaKv//q/WmII//sUZAAP8FYE1IDDEBANoLpAYCYCAigbRgeYAQA4AiiA8wgACMjiaJhRYGuLf6j0G0MNhOejWGXJb//iwPA+hvhPDWZBZuxVzEZy4z9Im6OCcjoDARV3R3//v0piCmoo//sUZAAP8HEFUIEmECAOIGnwZGIAAdAPPAWYIEAwgubBgwwIFhLaYpFCQsHWnO2/93WHrRoSzgRgmCVn//Vle0TCaxpRxgsLDypkxs//qOIHlBpk19IJlbl/0piCmooA//sUZAANkHcDUEkhGAgNAKmAZMIFAcARMkSAYiAygOalgIgEAAAMKAAHzYdFPO/0f/sWLosFClIQkwOhQ4xKU0AAERMugwTK22fePYjQAQQB5ZUAE0At/nf+hMQU1FAA//sUZAANUEsDywFpGAgK4DnXJAEBAjQPJkSMQCAtAOSFgQAEJoQEtCmGc3sEQQBAAAABZY9X//rYQjAmCgESKAd2j65FKDU77RiBN9cAPtDv/+HqdaYgpqKZlxycFxkA//sUZAAN0FgFRwHmGBoKgCkhPCMBggALFieYwAAegKUMkYwEFeEbVQUWqwSbLvIgAjTedQe///MiUh6EPGlDgoSIvMbmut1ZDpEAAZ08///1piCmopmXHJwXGQAAAAAA//sURAADkE8BxAEiGAwLABlsACIBgRgBIICEIDA8gRdEYYQEExEJB01FaMj/0gAAAAQwAA//QS8kUAAABSRH/7iSAYSEcEwTBD+sUaaeKixJMQU1FMy45OC4yAAAAAAA//sUZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuOTguMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
audioCardChecked=new Audio('data:audio/wav;base64,SUQzAwAAAAAAPlRTU0UAAAA0AAAATEFNRSAzMmJpdHMgdmVyc2lvbiAzLjk4LjIgKGh0dHA6Ly93d3cubXAzZGV2Lm9yZy8p//sQZAAAAGMASsUAQAgKQBn0oAABAsgvgLhigABXiG9DFiAAAAFoAOGChypwIS59YAIIAjykEPxA4MDJJAAAfizj0PAOJXX5O9NwgGK6OGcv6iEK9LFUM8HEgbIToJDcQyFUbMpKpTD/+xJkAAAAdwFbBhhAAA9BK6DCiAACVDOCGGMAAEWGsIMKMAAFCZwFZQRROSuZgcHhFz6P9e4CgXDjFaTuXB7w/8ufQtj1Q1iVtkXrEWwCQ6OzwC5fRK0IiQHcCKBxzyQmxYFtBLemIID/+xBkAA8QgAxfBxhgAA8CC8DlCAACHCtyBIUiKEGDsXQRiAaimCckiv/CuTz8dwBqhZDvo5Mv2UegBRO39gbb4OdqxOAdoYNeopcdftC90PaNs7tcGQYAcACdEhfK+Cez9L3lkxBTQP/7EmQAD/CCC1sBIViKDsFbIA3iUAKsL3YDDSSIPQXuwCCYYTxDMMSFJlxpHAFq1CGmSzYKxwZMXZYom6UcE2Gh66+2KRAdEIem4gCMeMBiudBN7EB8D/h8ImsCGYeEyh/PJ2fhIffaYP/7EGQAD/B9Dd8AaUqIDWHr4BQHJAJMN3IDLSTgQweuAKAsyBwS6d3O0qO3NJH94kjWo3dAHslHALeomOWs6V3ropfCepnduKy1V9Cb0kF/VgLdHIwEnbK3kUXVWCTSVs/RfsSmIKaA//sSZAAPEIQN3ADIONgQoaxtBAIngjQtbgSZJMA9BK7kIAkMUwdj8nK4sDXGj5eyhE+KnoAAABU1oAAAHrieZ8MKHjHIuxaInkZksZkh5234vo64u9enigACAbQTnXBHBAaTp5OTTEFN//sQZAAPsIQNX4EBMRAPAbvQACYMQkA3dgMhZMA+iW6UBpQ4iEU0NqyJyumm/civn5Z6yUUQA8zdkm1kBn50rT8wZlUw/lh+acCTr4mvuASWzyadebCjiii2/pV4N010AIqG/GumIID/+xJkAAkQiA1dAKZCIAqhvGQIBTfCsCtvNLKAIDuFr2qEUAYdBI01oWQ5VFhHLvANc3l7qwDAAAt8abTygsrABwAW5dRiynaIxpzGAm6saCOeRlsMAQAhLQPQZC//QL/lsjXpTEFNRQD/+xBkAAAAjhBghhhAAA7iC/DDiAACTDl8HLKAAD6HL0OKgACXdh9d80JPb3qDZzhffCCHdKJ9kTwwfrsmdn8W4IzOoCO2pbhct6zHmzf8X0qoFcxb9mrsgeFwVqb5frHpZ4B3oLTSYP/7EmQAATCVDtyArDkgDkAMXAQiJ4IoO4MjlEOwNwesQCO8fGaANjcbfjuKBHvKg80x0bOuT1BgSACAwAAlbVO+kBlv0aktfgAdkqhbUH4zvQBe1QvJtisBGhPG31DGtGIL2baYgpqKAP/7EGQACfCPDlmA7zk4DYHbAChMOwIYEWkghMAwNwdqwJCM7ARRQzQW1L/LNXCnmoXoAdq2PNtUBYTCHFYXTQX9kCXiVgBOKjgrRoaWGsNAqdEPDXuMYkIIusUQn4mvgCJQmIKaigAA');
audioWin=new Audio('data:audio/wav;base64,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');
audioLose=new Audio('data:audio/wav;base64,SUQzAwAAAAAAPlRTU0UAAAA0AAAATEFNRSAzMmJpdHMgdmVyc2lvbiAzLjk4LjIgKGh0dHA6Ly93d3cubXAzZGV2Lm9yZy8p//sQZAAAAGMAtgUAQAgLQBawoAgBA0hzZLhRAAA9h+vDBCAAxO8H4gd/7ogCIILD/h///+XD5d8uOB9RZbJYAHqM5BEI+Lk7hQnvFv/7U/8MJDvvqCv/nXwR/Ehvxg39fxJf9AbTEED/+xJkAAAAkxdVhhRAAA7g6nDBAAACSHNqGCKAAD4S7QMCIABS+Aol6l8pfL/0MG/woKq+DIK/hU8MBYlwE3RO+DRX4LP8hPY/hxfggn+Lk/9v/w4R38H///H8II/Y////0I1P/yC3TEH/+xBkAAMwkhjfxwhAAA8BW8zhCAACJH18goBWAC0AcnggCAbAEQIAb9Gv4MANYS//t//w/4YwAAAAGAAA3//H4H9H/+agAEACDfoym+C6CXb+f+X/8O8gAABk4DF/xJKRImIKaigAAP/7EmQAD/B/D92AAhEwDmPrkAEFNgKcfXYAoKgAPolugACISISwyE0G4v/OBg978s/1h9SO8InhrwH//5P/j2/9BVc8mQIquMBOO7/Ajl7No/4xr/6iVFuwMMGK0EXhP+3x6+V+pi0xBP/7EGQAAfCLH14AIBAQCoJboADiGAKkTXihiKqAQoguAAQcIFo4Iqj4QTxX/Ar8P7/hd/9RN31DigvzP1/4f40EEcT67IwoGaHHF3idCN5fhWR5v5LtEt8YFXBJ87p0+Qetlnp8smII//sSZAAP8IcTXoDgLIgOQguQFAJiAnQ/dgAkoMA7Ca3AUxTI3Ry9gYlRZUaP34l1Nwm1nDPUSWo4YHws3l+Gbz3p9EfN/KAzqoBaBZLfCHxoFoeW6r+rqJA+qgpwz+2hl8a3QbkkxBTQ//sQZAAPMIcM3oAIKGAPYOu4AKMCAmRpfAAM4IA3A69QEAjMbepDD9xcYsQZpwvUOKa/hhYiIDABVQ3lqXAAGU7874YvRrA13H3InBP+PL6f9G/5Q+n9FAIAAFfMUotxjuf+I/WmIID/+xJkAA+wkBteAKYSkA6A67UAJRQCcFd2ACSjADCE7wAAiEDTZThv5DUrBP1X/X6C/+CFf5IAoQGt+EViGy9P5b1v/q30vjhXLjTmgD/Ipf1/BruDCnfopIAZsj4/iCs+vn/JJiCmooD/+xBkAA/wjRtegAcQsA0CG7AAIhACgEFwALTmQDGKrkAAnEBqSxoTZxsN/R+Df/jX/oLo/KksUY+nEfog3QevWzySwHJlTAuMoVbXbohiYHl7Mj62f2gHUL+nJ/yj+//I/chMQU1FAP/7EmQACfCUD96oCSgwDeHLkABiBAJ8QXQAMOFAOYcuQBMIUAEYB6QahH5rBOpe2jdG4W/7eRKOYRRAnBi+TOnQf+R9X4dyQDbbBF8Ln74X8oaZjped5brlY7TsBraDH5dvQfbO/0piCP/7EGQAD/CJEN6ACBBADmKrgADCCgI4VXoAJEMAK4iuACAJ0ORaAMull6i78A9HXI4Qn7fL7gz7gG5BAsnvzf9cn6iz2CJj2Qv5Tfi26f2b6CFfM/t3dXWSBjAxb3wviyYgpqKAAAAA//sSZAAPUI0VXgAGEFANwivICAJyAnRTeAAgQQA5hm6AEwiIxj6PG7uB2JZ8ZOn57fBDfu9OmhgwBWj6vB4Kvfw3tRTHKWFYgCmQG1uZft0EJ+Cc70/q5qmWP1qCm+R1i+V63/KJiCmg//sQZAAP8H8Q3gAIOCAOoqtwHAKQAmQzdAAkoQA4im4AAwhI2McCxxaFmf+vIb+TZ/xT18xoVCMlKYQt8Z1KLT+QfUDPBVo913OO3bCWgfUei3jn+K74BxFaAvxHE/3/gn//pTEFNRT/+xJkAA8wiQ1eACkoMA1gq7gEYgMClDN0BJTqoDkEbYAUiBidj1oIImUzrSNDeHVqHqM7ycACAQAWgqwSNam2f+EOpQEQITizdjnljQI1ANqEs7LZG/VKgRsIrMIZpZsVUf8uzWmIKaD/+xBkAA2QhAzdASA6gA5Ay2AFKAACQEd6IwCqADADbxgBDAzyoN8irT9IaQJTMa6kofxAqaYmsLyjmGFh+6UsTihM3dxGkcdxg9ODvm+gh+H0+35OCQRoi7kox/35V/hxMQU1FAAAAP/7EmQAD/CBEd4ACRBADOHLgBgCVAMMSXADMOcAOActwAMIIKK4b9lRLRJ1Cf+D/Cj/J/T+y3J/lprCmmoNzf/r9MFLBVwNJm6N+yZW1coscbzvoFC57lHdPhiGW4dgXznG9+Pyf/3pgP/7EGQAD/CKDt6ACRBADsJbgADiBAJcR3QAMOEAM4juAAMIEOzGImPKh3RS/dsdvhOW+RT6LUCqs8ldQVgjX4l/sOvqlU0KCea4WsITrtwh/G/46Or/0PmUCrS7/Ac7fN+Cf60xBTUU//sSZAAN8IYOXQGGEaAMQVuQAGIGAuw5ciewQwA7BW2AFJwo269vweC2pgxz5u87QT/Gfmw7gYGo7pWRsCwr9upXgkBVZUPwEvpUXu6l/Jmo3FJvDLZD/dDjx0ukfQZ4cjdi3Cj/9aYA//sQZAAL8IYJXQAMEDAO4WtACYgHAlAlbqakQqA8A+0AViRAGk2OyCeo2KzSPg3uZKpvPaYo4jCp06eL37YGvwI3BdD1CmJGSxpE0xYargRw6ldK/TXFAqBU6OcR548geZYhXoQmIID/+xJkAAUwhArcgCxIAA5A+4UZIhMCJEeFoQBQYD6FrdAViGSMHCM2Wp5X/fcjrTMcDbN+sEAANYpAaEBGoRj4ZssoAM22i4LZHSnxu3UeS7BH/yoAApAAqaYfRbaXD5K6+F6ExBTUUAD/+xBkAA/wjAtbgYNJMA9BW0AFhwQCVCtyAb0gQDeFrgCSiNT6PRWBmLhJftOENfR6GnW5fqQ2VjAVFUoimqTctwtrP6IH43GU6MfEsObWXQ//bnkIR0W3BIbbFihpMwYlBPB9OpMQQP/7EmQAAfCCCNwAKTAQD0FbYCRGUAI4IYchhEKwOYVtQLGUlIKAEaGRG4KL3a9jqJKC23u9TAEPD4PQ2nHBOy97g37AKXr8DlBMQtj3wYYn12urn4e1MNSPBjPKCB9R+wd5fIpiCmooAP/7EGQACTCJC1uBiREqD0DbpBgiMwHsC4OgmEAgOwRsgCSIJKmYtjDd23CcuIlSEqNuAenzMEADIJq0LW7miuPEgWLdQz2tAFARId5NCK66VvqRqgQfEjUkyotax0I2JUuytMQU1FAA//sSZAAPEIoJ2wAvMBAOIAyuAGIBwlwlbgE9YEA1ADH0AIgGIB1lKj7sJMY0rDbu6TeKOorU0Q0CAAAAADVODnO/gZHF1ZzpN44qNHefB9eJCZiQ0XsoCAgGoAgTu2+C2z/+tMQU1FAA//sQZAAB8HYJXAGFSZAPQTtABeMCAmgniYAEYXA8hiyAkInE3i48C3uUAvpAf6YYNe2+T+Kh40Xg5mhgz6P7qpHqACTCjXmEjNR2cvAGHx+uLdD/5BA5ZABJCHYSokz4/2JG+MmIKaD/+xJkAA8wlAncACxYEA8BPP4EAlHCYCduALDAQC+E75AwiJSy8BUJGV8VJpdko55DSq6uaTlkMlBAWHAAAAssn3ziUnFZIQXEdy3Cg4T+eN7o0i5C8rr+kgEATMagisXB+GZdKYgpqKD/+xBkAA8wgQfageFpAA4gu8QIAjECvDNiB5hoQDqGbED1iJzvVMB9QmzMMJcN3lbRCmn1IAA1f+gbVoWJJ0TQtWP7cTMG0XJ9ihCEac/BbKCez3FJ//R19shEMnYbjsDSerWK242tMP/7EmQAAfCFDNgAOBA4DcD64B0pAUKIAYOghEAwPQWqQCeIJCCk6JRiPfqK3T5qAjUH2w9KAqHwyys1mFQYduP6R6AwFLXbbZJnLXJqbXe0RP5Ho6unVGFPHgxJ6T3YkN3DNQBxzJiCmv/7EGQAC/CNCdWAbBBADqE6cDzNFAI8K1CnsELgPoTpAMMIkKMCoDE9d8iOM9Y2JoUSjVf/VTBAUiaLR4GcKWnqPz/6C+MiA53O3AFPEb5mo9BpKp7kSfCkKsSvIgSBXLqKYkpPpTEE//sSZAAP8JIJ0gBvEEAOAVoQJWIlQpgrPAC8QQA9A+cA8JiEoIog4nLGKjlb2Dwr4pWMbLLkbFJgLqnL15Eq02qVE5bNiLA5UJ3SUqGshsVwSVHgnU1y/+rp4gQpU8kwU4inz8TVIsqA//sQZAALkI4LUEApEBgM4LnkIAMhAZwXOwUM5GAoAmZUIwgEAAuMAJLAkTfAzAO4lHEQQ/hsAAAAGcBMlqCgrX2JTUdRJA620BgfDa3EeWhCDFTbDjp5bv6UxBTUUzLjk4LjIAAAAAD/+xJkAAPQbgtMQSASmAogySAkJhMC5CsSAbxBACgCY0QElAwAYJAA8yonhX5FZFeKrrExIxTGGo4VktSiQfImilxiMZqnBavIE9SVATpIQ8Sf7EDIM1eAxF//eitMQU1FMy45OC4yAAD/+xBEAAWQYwDJ0AMACAngGOEAQQGCOAkGQIhgCD4AINgQAAQAoAJgAAAOsGv/tqHsAWJNUR//V1vkRgpxJ2kxLYMS8Jp9Nf+X/sv8CMDKfq+86RWtx4kVATzpFMQU1FMy45OC4yAAAP/7EkQADdBwALzoARgICEAVgwAAAQDoAv5gDGAgNYBgSAGMBAASABIAIAABxX/Ff//rEAAAA///xYWTgH//zbNI68P/+TZPnAscCI4aBCiYgpqKZlxycFxkAAAAAAAAAAAAAAAAAAAAAA==');
function playAudio(a){
	if(a.currentTime>0) {
		a.pause();
		a.currentTime=0;
	}
	a.play();
}
function menu(){
	modalF();
	(gameOn==true)?c=false:c=' class="disabled"';
	modal.insertAdjacentHTML('afterbegin','<div id="menu"><h1><span>M</span><span>e</span><span>M</span><span>o</span></h1><h3>Memory Game</h3><ul><li data-action="continue"'+c+'>Continue</li><li data-action="new-game">New Game</li><li data-action="instructions">Instructions</li><li data-action="author">Author</li></ul></div>');
	document.querySelectorAll('#menu li').forEach(function(e){
		e.addEventListener('click',function(){
			if (e.classList=='disabled') {
				return;
			}
			playAudio(audioButton);
			modalN();
			document.getElementById('menu').remove();
		});
	});
	document.querySelector('[data-action="new-game"]').addEventListener('click',function(){
		if(gameOn==false) {
			newGame(1);
			return;
		}
		modalF();
		modal.insertAdjacentHTML('afterbegin','<div id="menu"><h2>Are you sure?</h2><ul><li data-action="yes">Yes</li><li data-action="no">No</li></ul></div>');
		document.querySelector('[data-action="yes"]').addEventListener('click',function(){
			playAudio(audioButton);
			modalN();
			document.getElementById('menu').remove();
			moves=100;
			newGame(1);
		});
		document.querySelector('[data-action="no"]').addEventListener('click',function(){
			playAudio(audioButton);
			document.getElementById('menu').remove();
			menu();
		});
	});
	document.querySelector('[data-action="instructions"]').addEventListener('click',function(){
		modalF();
		modal.insertAdjacentHTML('afterbegin','<div id="menu" class="instructions"><h2>Instructions</h2><p>1. Turn back any two cards and remember what number was on the cards and where it was.</p><p>2. You have 75 moves, match two same numbers to get a score.</p><p>When all the cards have been matched, the current level is clear and you go for next level.</p><p>4. The game is over, when the last level is cleared or you have no moves left.</p><ul><li data-action="continue">Continue</li></ul></div>');
		document.querySelector('[data-action="continue"]').addEventListener('click',function(){
			playAudio(audioButton);
			document.getElementById('menu').remove();
			menu();
		});
	});
	document.querySelector('[data-action="author"]').addEventListener('click',function(){
		modalF();
		modal.insertAdjacentHTML('afterbegin','<div id="menu" class="author"><h2>Piotr Półtorak</h2><p><a href="https://www.facebook.com/piotr.poltorak" rel="nofollow" target="_blank">fb.com/piotr.poltorak</a></p><p><a href="https://github.com/poltorak1985" rel="nofollow" target="_blank">github.com/poltorak1985</a></p><p><a href="mailto:poltorak1985@gmail.com" rel="nofollow" target="_blank">poltorak1985@gmail.com</a></p><ul><li data-action="continue">Continue</li></ul></div>');
		document.querySelector('[data-action="continue"]').addEventListener('click',function(){
			playAudio(audioButton);
			document.getElementById('menu').remove();
			menu();
		});
	});
}
menu();
document.onkeydown=function(e){
	if(!document.getElementById('menu')){
		(e.keyCode==27)?menu():false;
	}
    
};
function cards(){
	n=cardsNumber[level-1];
	cardsSelected=[];
	colorsSelected=[];
	for(let i=0,j=0;i<n/2;i++,j++){
		cardsSelected.push(i+1);
		cardsSelected.push(i+1);
		if(j==colors.length)j=0;
		colorsSelected.push(colors[j]);
		colorsSelected.push(colors[j]);
	}
	for(let i=cardsSelected.length-1;i>0;i--){
		ii=(Math.floor(Math.random()*(i+1)));
		[cardsSelected[i],cardsSelected[ii]]=[cardsSelected[ii],cardsSelected[i]];
		[colorsSelected[i],colorsSelected[ii]]=[colorsSelected[ii],colorsSelected[i]];
	}
	for(let i=0;i<n;i++){
		cl=0;
		cardsT=[];
		document.getElementById('cards').insertAdjacentHTML('beforeend','<div data-cardid='+(i+1)+'" class="card"></div>');
		document.querySelectorAll('.card')[i].addEventListener('click', function(){
			if(cl==2||this.classList.contains('clicked')||this.classList.contains('checked')){
				return;
			} else {
				playAudio(audioCard);
				this.classList.add('clicked');
				this.setAttribute('data-bg',colorsSelected[i]);
				this.insertAdjacentHTML('beforeend','<span>'+cardsSelected[i]+'</span>');
				cardsT.push(cardsSelected[i]);
				cl++;
				if(cl==2){
					if(cardsT[0]==cardsT[1]){
						document.getElementById('moves').innerHTML=moves;
						for(let i=2;i>0;i--){
							audioCardChecked.play();
							document.getElementsByClassName('clicked')[i-1].classList.add('checked');
							document.getElementsByClassName('clicked')[i-1].classList.remove('clicked');
							if(document.querySelectorAll('.checked').length==n-1){
								if(cardsNumber.length==level){
									gameOver();
								} else {
									playAudio(audioWin);
									modalF();
									modal.insertAdjacentHTML('afterbegin','<div id="menu"><h2>Congratulation!</h2><ul><li data-action="next-level">Next Level</li></ul></div>');
									document.querySelector('[data-action="next-level"]').addEventListener('click',function(){
										playAudio(audioButton);
										modalN();
										document.getElementById('menu').remove();
										level++;
										newGame(level);
									});
								}
							}
						}
						cl=0;
					} else {
						moves--;
						document.getElementById('moves').innerHTML=moves;
						setTimeout(function(){
							for(let i=2;i>0;i--){
								document.querySelectorAll('.clicked span')[i-1].remove();
								document.querySelectorAll('.clicked')[i-1].removeAttribute('data-bg');
								document.getElementsByClassName('clicked')[i-1].classList.remove('clicked');
							}
							cl=0;
						},1000);
					} cardsT=[];
				} 
			}
			if(moves==0){
				gameOver();
			}
		});
	}
	resize();
}
function resize(){
	n=cardsNumber[level-1];
	if (n==16||n==20||(n==24 && window.innerWidth<=window.innerHeight)){
		document.getElementById('cards').setAttribute('data-cols',4);
		cols=4;
	} else {
		document.getElementById('cards').setAttribute('data-cols',6);
		cols=6;
	}
	size=document.getElementById('cards').offsetWidth;
	document.querySelectorAll('.card').forEach(function(e){
		e.style.width=(size/cols-10)+"px";
		e.style.height=(size/cols-10)+"px";
	});
	document.getElementById('cards').style.fontSize=(size/cols/2.5)+"px";
}
function clearBoard(){
	if(document.querySelector('#score p')){
		document.querySelector('#score p').remove();
	}
	for (let i=document.querySelectorAll('.card').length;i>0;i--){
		document.querySelectorAll('.card')[i-1].remove();
	}
}
var gameOn=false, moves;
function newGame(l){
	gameOn=true;
	clearBoard();
	level=l;
	cards();
	(moves)?moves:moves=75;
	document.getElementById('score').insertAdjacentHTML('afterbegin','<p>Bad Moves Left: <span id="moves">'+moves+'</span></p>');
	window.addEventListener('resize',resize);
	document.getElementById('board-nav').addEventListener('click',function(){
		if(!document.getElementById('menu')){
			playAudio(audioButton);
			menu();
		}
	});
}
function gameOver(){
	gameOn=false;
	modalF();
	(moves==0)?string='<h2>Game Over!</h2><h3>You lose!</h3>':string='<h2>Congratulation!</h2><h3>You win!</h3><p>You completed the game in '+(75-moves)+' moves!</p>';
	modal.insertAdjacentHTML('afterbegin','<div id="menu">'+string+'<ul><li data-action="menu">Menu</li></ul></div>');
	(moves==0)?playAudio(audioLose):playAudio(audioWin);
	document.querySelector('[data-action="menu"]').addEventListener('click',function(){
		playAudio(audioButton);
		document.getElementById('menu').remove();
		menu();
	});
}