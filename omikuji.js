//くじの結果とOPACのURLを対応させている、画像名の番号と配列の順番が対応しているので注意
const kuji_url=
["https://opac.lib.hiroshima-cu.ac.jp/opac/volume/351636?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/313784?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/498763?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/311126?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/365067?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/256470?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/310214?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/328530?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/342428?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/313950?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/485148?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/358383?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/335454?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/364786?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/361710?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/345569?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/478910?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/344202?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/494323?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/318390?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/359779?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/191425?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/347799?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/308881?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/346717?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/356519?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/359454?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/352711?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/330552?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/350630?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/88632?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/358469?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/165285?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/362370?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/364299?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/283513?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/318881?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/269923?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/287869?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/340717?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/346746?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/477989?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/226569?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/362007?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/320784?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/346069?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/31806?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/480332?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/500414?locale=ja&target=l",
"https://opac.lib.hiroshima-cu.ac.jp/opac/volume/315450?locale=ja&target=l"
];

const button = document.getElementById("button");//ボタン
const p_url=document.getElementById("url");//表示させるURL
const lucky = document.getElementById("lucky");//ラッキー請求番号の図書の予約はこちらから↓の部分


function firstshow_pic(){//最初の高速で画像を変える部分の関数
    document.getElementsByClassName("kuji")[0].src="./img/gifone.gif";
    //ランダムな画像表示をgifにした、写真自体をランダムで表示させようとするとラグがひどい
}

function effect_start(){//くじ結果を表示させる前の演出
    firstshow_pic();   
    button.style.display='none';//ボタン表示させない
    p_url.style.display='none';//URL表示させない
    lucky.style.display='none';//ラッキー請求番号の図書の予約はこちらから↓表示させない
}

function effect_stop(){//くじ結果を表示させる前の演出を終えてから結果を表示する
    button.style.display='block';//ボタン表示させる
    p_url.style.display='block';//URL表示させる    
    lucky.style.display='block';//ラッキー請求番号の図書の予約はこちらから↓表示させる
    // ランダムな整数を作成（1-50）
    let randomNumber_2 = Math.floor(Math.random() * 50 + 1);
    // くじの結果画像を表示させる バックティック文字で囲む事に注意(` `)
    document.getElementsByClassName("kuji")[0].setAttribute('src', `./おみくじ111-160/スライド${randomNumber_2}.JPG`);
    p_url.innerHTML=(kuji_url[randomNumber_2-1]);//URLは最終のくじ結果に対応
    p_url.href=(kuji_url[randomNumber_2-1]);//リンクにしている   
}


// ボタンクリック時にくじを引く
function drawKuji() {
    effect_start();
    setTimeout('effect_stop()',1000);//1秒後にeffect_stop()を実行
    // ボタンの文字を変更する
    document.querySelectorAll("button")[0].innerHTML = "もう一度引く<br>Try again";
}


