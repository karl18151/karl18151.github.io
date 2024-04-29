function welcome(){
    let welcome_text = '��ӭ�������Blog'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="��ӭ�㣬����"+referrer.toUpperCase()+"���û���";//��ȡ�û���Դ����
    }
    swal({
        title: " ��ӭ��",
        text: welcome_text+'\n��������������������ӣ�',//��ӭ�ı����������޸�
        imageUrl: "/images/avatar.jpg",//ͼƬ�������޸�λ��
        timer: 3000,//����ʱ��
        showConfirmButton: false
    });
}
$(document).ready(()=>{//��δ����JQuery��������
    welcome()
})