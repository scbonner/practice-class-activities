<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <link href="./css/style.css"       type="text/css" rel="stylesheet" media="screen,projection"/>
    <script type="text/javascript"></script>
    <link href="css/style.min.css"       type="text/css" rel="stylesheet" media="screen,projection"/>
    <script type="text/javascript"></script>


<script type="text/javascript">

const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}


  </script>