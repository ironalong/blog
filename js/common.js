/**
 * Created by Lenovo on 2017/12/28.
 */

function animate(obj, target) {

    clearInterval(obj.timerID);

    obj.timerID = setInterval(function () {

        //ȡ����ǰλ��
        var current = obj.offsetLeft;

        //��ò���
        var step = target > current ? 10 : -10;

        //��Ŀ�� - ��ǰλ�� ���Ƿ����1����������ڣ��Ҿ�����һ��
        //����͵�Ŀ����ֹͣ��ʱ��

        //��ǰλ��500��Ŀ��λ��400,400 - 500 = -100   ����Ϊ-10���������Ҫȡ����ֵ������ȷ�ж�
        if (Math.abs(target - current) >= Math.abs(step)) { //390

            //�ڵ�ǰλ������һ��
            current += step;

            //��ֵ��box
            obj.style.left = current + "px";

        } else {

            obj.style.left = target + "px";
            clearInterval(obj.timerID);
        }


    }, 100);
}


function id(a) {

    return document.getElementById(a);
}

function tag(a) {
    return document.getElementsByTagName(a);
}

function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}