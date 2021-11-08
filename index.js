function GetName() { //名前入力エリアから値を取得
    const InputNameArea = document.getElementById("getname").value;
    console.log(InputNameArea);
    return InputNameArea
}

function Judgement(UserName) { //判定処理
    let Component = [];
    let NameCharset = UserName.charCodeAt(0);
    Component.push(NameCharset);
    return Component;
}

function ShowResult(name, Component) { //結果を表示
    const ShowResultArea = document.getElementById("result");
    ShowResultArea.innerHTML = `${name}の成分<br>${Component}`;
}

function TestProject() { //テスト用
    const TestName = GetName();
    const Component = Judgement(TestName);
    ShowResult(TestName, Component);
}

