	
		let db=document.getElementById('Drkbox');
		let light=document.getElementById('l');	

	
	function darkmodeBOX(){
	
		if (light.checked==true) {
			db.style.width='180%'
			off.style.display='block';
			on.style.display='none';
		}
		else{
			db.style.width='';
			on.style.display='block';
			off.style.display='none';
	}
	}

	function onoff(){
		if(light.checked==true){
			light.checked=false;
		}
		else{light.checked=true}
			darkmodeBOX();
	}


	function darkmodeOn(){
								header.style.background='#181818'
									const divElementsone = document.querySelectorAll(' .dark');
									for (const div of divElementsone) {
 										 div.style.backgroundColor = '#181818';
										}	
									const divElementstwo = document.querySelectorAll(' .semi-dark');
									for (const div of divElementstwo) {
 										 div.style.backgroundColor = '#262626';
										}	
									const divElementsthree = document.querySelectorAll(' .txt-g');
									for (const div of divElementsthree) {
 										 div.style.color = '#999999';
										}	
									const divElementsfour = document.querySelectorAll(' .txt-w');
									for (const div of divElementsfour) {
 										 div.style.color = '#d3d3d3';
										}	
									const divElementsfive = document.querySelectorAll(' .txt-o');
									for (const div of divElementsfive) {
 										 div.style.color = '#cf7d05f2';
										}	
									const divElementssix = document.querySelectorAll(' .txt-b');
									for (const div of divElementssix) {
 										 div.style.color = '#2196f3b5';
										}	

										mode_message.innerHTML='Dark mode';
	}

	function lightmodeOn(){

										header.style.background=''
											const divElementsone = document.querySelectorAll(' .dark');
									for (const div of divElementsone) {
 										 div.style.backgroundColor = '';
										}	
									const divElementstwo = document.querySelectorAll(' .semi-dark');
									for (const div of divElementstwo) {
 										 div.style.backgroundColor = '';
										}	
									const divElementsthree = document.querySelectorAll(' .txt-g');
									for (const div of divElementsthree) {
 										 div.style.color = '';
										}	
									const divElementsfour = document.querySelectorAll(' .txt-w');
									for (const div of divElementsfour) {
 										 div.style.color = '';
										}	
									const divElementsfive = document.querySelectorAll(' .txt-o');
									for (const div of divElementsfive) {
 										 div.style.color = '';
										}	
									const divElementssix = document.querySelectorAll(' .txt-b');
									for (const div of divElementssix) {
 										 div.style.color = '';
										}	

										mode_message.innerHTML='Light mode';
	}


	function darkmodeTOGGLE(){
		if(header.style.background==''){
								setTimeout(darkmodeOn, 500);
									setTimeout(DarkTime, 1000);
							}
								else{
									setTimeout(lightmodeOn, 500)
									setTimeout(DarkTime, 1000);
								}							
 						}

		function DarkTime() {

								db.style.width='0%';
								light.checked=false;
								on.style.display='block';		
								off.style.display='none';			
		}
