//���N�G�X�gGET


var url;
var request = new XMLHttpRequest();
request.open('GET', url);
request.onreadystatechange = function () {
    if (request.readyState != 4) {
        //���N�G�X�g��
    }
    else if (request.status != 200) {
        //���s
    }
    else {
        // �擾����

    }
};

request.send(null);
