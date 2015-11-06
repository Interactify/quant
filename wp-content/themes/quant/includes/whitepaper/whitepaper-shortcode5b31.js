jQuery(document).ready(function($) {
	
	var Whitepaper = {
	
		Init: function() {
			this.BindEvents();
		},
		
		BindEvents: function() {
			/*
			$('.whitepaper-download-button').on('click', function(e) {
				e.preventDefault();
				alert('test');
			});
			*/
			
			$('.whitepaper-form').submit(function(){
				var returnVal=true;
				var currentForm = $(this);
				
				console.log(currentForm.find('[name=fname]').val());
				
				if(currentForm.find('[name=fname]').val().length===0){
					currentForm.find('[name=fname]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=fname]').removeClass("err");
				};
				
				if(currentForm.find('[name=lname]').val().length===0){
					currentForm.find('[name=lname]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=lname]').removeClass("err");
				};
				
				if(currentForm.find('[name=email]').val().length===0){
					currentForm.find('[name=email]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=email]').removeClass("err");
				};
				if(currentForm.find('[name=company]').val().length===0){
					currentForm.find('[name=company]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=company]').removeClass("err");
				};
				if(currentForm.find('[name=jobTitle]').val().length===0){
					currentForm.find('[name=jobTitle]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=jobTitle]').removeClass("err");
				};
				if(currentForm.find('[name=industry]').val().length===0){
					currentForm.find('[name=industry]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=industry]').removeClass("err");
				};
				if(currentForm.find('[name=country]').val().length===0){
					currentForm.find('[name=country]').addClass("err");
					returnVal=false;
				} else {
					currentForm.find('[name=country]').removeClass("err");
				};
				
				if(!currentForm.find('[name=howDid]:checked').val()){
					currentForm.find('[name=err]').fadeIn();
					returnVal=false;
				} else {
					currentForm.find('[name=err]').fadeOut();
				}
				
				
				if(!returnVal){
					event.preventDefault();
				}
				
			});
		}
	
	};
	
	Whitepaper.Init();
	
});