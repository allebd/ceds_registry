/*
 * Registration Procedures System
 *
 * Copyright 2015, CSIS
 * Licensed to Centre For Systems and Information Sciences
 * http://www.covenantuniversity.edu.ng
 *
 * Javascript Designed by CSIS.
 */

$(document).ready(function(){
	//Menu
	$("#sub-menu*").hide();

	$("#menu*").click(function(){
		$(this).children().show();
		$("#sub-menu*").not($(this).children()).hide("slow");
	});
	//End of Menu


    //The radio effects
    $("input[data-mytext]").click(function() {
        var mytext = $(this).attr("data-mytext");
        $('#'+mytext).attr('required', true);
        $('#'+mytext).removeAttr('disabled');
    });

    $("input[value=No]").click(function() {
        var mytext2, mytextname;
        mytextname = $(this).attr("name");
        if($('#'+mytextname).val() == 'Yes')
        {
            mytext2 = $('#'+mytextname).attr("data-mytext");
            $('#'+mytext2).val('');
            $('#'+mytext2).attr('disabled', true);
            $('#'+mytext2).removeAttr('required');
        }
    });

    $("input[data-mytext=doctor]").click(function() {
        $('#docname').attr('required', true);
        $('#docname').removeAttr('disabled');
        $('#docadd').attr('required', true);
        $('#docadd').removeAttr('disabled');
        $('#doctel').attr('required', true);
        $('#doctel').removeAttr('disabled');
        $('#docmail').attr('required', true);
        $('#docmail').removeAttr('disabled');
        $('#thecountry').attr('required', true);
        $('#thecountry').removeAttr('disabled');
    });

    $("input[data-mytext=nodoctor]").click(function() {
        $('#docname').attr('disabled', true);
        $('#docname').removeAttr('required');
        $('#docadd').attr('disabled', true);
        $('#docadd').removeAttr('required');
        $('#doctel').attr('disabled', true);
        $('#doctel').removeAttr('required');
        $('#docmail').attr('disabled', true);
        $('#docmail').removeAttr('required');
        $('#thecountry').attr('disabled', true);
        $('#thecountry').removeAttr('required');
        $("#thestate").hide();
    });
    //End of radio effects

    //Get state in Nigeria
    $("#thecountry").click(function() {
        if($("#thecountry").val() == "Nigeria")
        {
            $("#thestate").show();
        }else{
            $("#thestate").hide();
        }
    });

    $("#thecountry1").click(function() {
        if($("#thecountry1").val() == "Nigeria")
        {
            $("#thestate1").show();
        }else{
            $("#thestate1").hide();
        }
    });

    $("#thecountry2").click(function() {
        if($("#thecountry2").val() == "Nigeria")
        {
            $("#thestate2").show();
        }else{
            $("#thestate2").hide();
        }
    });

    $("#thecountry3").click(function() {
        if($("#thecountry3").val() == "Nigeria")
        {
            $("#thestate3").show();
        }else{
            $("#thestate3").hide();
        }
    });
    //End of Getting state in Nigeria

    //cult conditons
    $("input[type=radio]").click(function() {
        if($(this).val() == 'cult')
        {
            $('#cultgr').attr('required', true);
            $('#cultgr').removeAttr('disabled');
            $('#cultyr').attr('required', true);
            $('#cultyr').removeAttr('disabled');
            $('#cultin').attr('required', true);
            $('#cultin').removeAttr('disabled');
            $('#culthp').attr('required', true);
            $('#culthp').removeAttr('disabled');
            $('#cultrs').attr('required', true);
            $('#cultrs').removeAttr('disabled');
            $('#culthv').attr('required', true);
            $('#culthv').removeAttr('disabled');
            $('#cultlv').attr('required', true);
            $('#cultlv').removeAttr('disabled');
        }else if($(this).val() == 'ntcult'){
            $('#cultgr').attr('disabled', true);
            $('#cultgr').removeAttr('required');
            $('#cultyr').attr('disabled', true);
            $('#cultyr').removeAttr('required');
            $('#cultin').attr('disabled', true);
            $('#cultin').removeAttr('required');
            $('#culthp').attr('disabled', true);
            $('#culthp').removeAttr('required');
            $('#cultrs').attr('disabled', true);
            $('#cultrs').removeAttr('required');
            $('#culthv').attr('disabled', true);
            $('#culthv').removeAttr('required');
            $('#cultlv').attr('disabled', true);
            $('#cultlv').removeAttr('required');
        }
    });
    //End of cult conditions

    $("#devicemore1").hide();
    $("#devicemore2").hide();
    $("#devicemore3").hide();
    $("#devicemore4").hide();
    $("#devicemore5").hide();
    $("#devicemore6").hide();
    $("#devicemore7").hide();
    $("#devicemore8").hide();
    $("#devicemore9").hide();
    //device one
    $("#addmore").click(function(){
        $("#addmore").hide();
        $("#devicemore1").show();
    });

    $("#cancelmore1").click(function(){
        $("#addmore").show();
        $("#devicemore1").hide();
    });
    //end of device one
    //device two
    $("#addmore1").click(function(){
        $("#addmore1").hide();
        $("#cancelmore1").hide();
        $("#devicemore2").show();
    });

    $("#cancelmore2").click(function(){
        $("#addmore1").show();
        $("#cancelmore1").show();
        $("#devicemore2").hide();
    });
    //end of device two
    //device three
    $("#addmore2").click(function(){
        $("#addmore2").hide();
        $("#cancelmore2").hide();
        $("#devicemore3").show();
    });

    $("#cancelmore3").click(function(){
        $("#addmore2").show();
        $("#cancelmore2").show();
        $("#devicemore3").hide();
    });
    //end of device three
    //device four
    $("#addmore3").click(function(){
        $("#addmore3").hide();
        $("#cancelmore3").hide();
        $("#devicemore4").show();
    });

    $("#cancelmore4").click(function(){
        $("#addmore3").show();
        $("#cancelmore3").show();
        $("#devicemore4").hide();
    });
    //end of device four
    //device five
    $("#addmore4").click(function(){
        $("#addmore4").hide();
        $("#cancelmore4").hide();
        $("#devicemore5").show();
    });

    $("#cancelmore5").click(function(){
        $("#addmore4").show();
        $("#cancelmore4").show();
        $("#devicemore5").hide();
    });
    //end of device five
    //device six
    $("#addmore5").click(function(){
        $("#addmore5").hide();
        $("#cancelmore5").hide();
        $("#devicemore6").show();
    });

    $("#cancelmore6").click(function(){
        $("#addmore5").show();
        $("#cancelmore5").show();
        $("#devicemore6").hide();
    });
    //end of device six
    //device seven
    $("#addmore6").click(function(){
        $("#addmore6").hide();
        $("#cancelmore6").hide();
        $("#devicemore7").show();
    });

    $("#cancelmore7").click(function(){
        $("#addmore6").show();
        $("#cancelmore6").show();
        $("#devicemore7").hide();
    });
    //end of device seven
    //device eight
    $("#addmore7").click(function(){
        $("#addmore7").hide();
        $("#cancelmore7").hide();
        $("#devicemore8").show();
    });

    $("#cancelmore8").click(function(){
        $("#addmore7").show();
        $("#cancelmore7").show();
        $("#devicemore8").hide();
    });
    //end of device seven
    //device nine
    $("#addmore8").click(function(){
        $("#addmore8").hide();
        $("#cancelmore8").hide();
        $("#devicemore9").show();
    });

    $("#cancelmore9").click(function(){
        $("#addmore8").show();
        $("#cancelmore8").show();
        $("#devicemore9").hide();
    });
    //end of device nine

    $("#medform2").hide();
    $("#medform3").hide();
    $("#medform4").hide();
    $("#medform5").hide();

    var currentmynav = 1;
    var pagenum = 1;
    $("#mednext").click(function(){
        var formdiv = "#medform"+currentmynav;
        var thehealthy = $(formdiv+" input:radio[name=health][value=Yes]");
        var thehealthn = $(formdiv+" input:radio[name=health][value=No]");
        var themedicy = $(formdiv+" input:radio[name=medic][value=Yes]");
        var themedicn = $(formdiv+" input:radio[name=medic][value=No]");
        var theallergy = $(formdiv+" input:radio[name=allerg][value=Yes]");
        var theallergn = $(formdiv+" input:radio[name=allerg][value=No]");
        var thesurgy = $(formdiv+" input:radio[name=surg][value=Yes]");
        var thesurgn = $(formdiv+" input:radio[name=surg][value=No]");
        var thehospy = $(formdiv+" input:radio[name=hosp][value=Yes]");
        var thehospn = $(formdiv+" input:radio[name=hosp][value=No]");
        var theasthmay = $(formdiv+" input:radio[name=asthma][value=Yes]");
        var theasthman = $(formdiv+" input:radio[name=asthma][value=No]");
        var thelepsyy = $(formdiv+" input:radio[name=lepsy][value=Yes]");
        var thelepsyn = $(formdiv+" input:radio[name=lepsy][value=No]");
        var thementaly = $(formdiv+" input:radio[name=mental][value=Yes]");
        var thementaln = $(formdiv+" input:radio[name=mental][value=No]");
        var thetubery = $(formdiv+" input:radio[name=tuber][value=Yes]");
        var thetubern = $(formdiv+" input:radio[name=tuber][value=No]");
        var thedrugy = $(formdiv+" input:radio[name=drug][value=Yes]");
        var thedrugn = $(formdiv+" input:radio[name=drug][value=No]");
        var thehearty = $(formdiv+" input:radio[name=heart][value=Yes]");
        var theheartn = $(formdiv+" input:radio[name=heart][value=No]");
        var thekidneyy = $(formdiv+" input:radio[name=kidney][value=Yes]");
        var thekidneyn = $(formdiv+" input:radio[name=kidney][value=No]");
        var thediabetesy = $(formdiv+" input:radio[name=diabetes][value=Yes]");
        var thediabetesn = $(formdiv+" input:radio[name=diabetes][value=No]");
        var thelepsysy = $(formdiv+" input:radio[name=lepsys][value=Yes]");
        var thelepsysn = $(formdiv+" input:radio[name=lepsys][value=No]");
        var thementalsy = $(formdiv+" input:radio[name=mentals][value=Yes]");
        var thementalsn = $(formdiv+" input:radio[name=mentals][value=No]");
        var thetubersy = $(formdiv+" input:radio[name=tubers][value=Yes]");
        var thetubersn = $(formdiv+" input:radio[name=tubers][value=No]");
        var thediabetessy = $(formdiv+" input:radio[name=diabetess][value=Yes]");
        var thediabetessn = $(formdiv+" input:radio[name=diabetess][value=No]");
        var thehbpy = $(formdiv+" input:radio[name=hbp][value=Yes]");
        var thehbpn = $(formdiv+" input:radio[name=hbp][value=No]");
        var theasthmasy = $(formdiv+" input:radio[name=asthmas][value=Yes]");
        var theasthmasn = $(formdiv+" input:radio[name=asthmas][value=No]");
        var theheartsy = $(formdiv+" input:radio[name=hearts][value=Yes]");
        var theheartsn = $(formdiv+" input:radio[name=hearts][value=No]");
        var thedocy = $(formdiv+" input:radio[name=doc][value=Yes]");
        var thedocn = $(formdiv+" input:radio[name=doc][value=No]");
        var theprob = $(formdiv+" input:text[name=prob]");
        var themed = $(formdiv+" input:text[name=medicate]");
        var theallergic = $(formdiv+" input:text[name=allergic]");
        var thesurgical = $(formdiv+" input:text[name=surgical]");
        var thehospital = $(formdiv+" input:text[name=hospital]");
        var theasthmatic = $(formdiv+" input:text[name=asthmatic]");
        var theepilepsy = $(formdiv+" input:text[name=epilepsy]");
        var theillness = $(formdiv+" input:text[name=illness]");
        var thelosis = $(formdiv+" input:text[name=losis]");
        var theaddiction = $(formdiv+" input:text[name=addiction]");
        var thehear = $(formdiv+" input:text[name=hear]");
        var thekid = $(formdiv+" input:text[name=kid]");
        var themellitus = $(formdiv+" input:text[name=mellitus]");
        var theepilepsys = $(formdiv+" input:text[name=epilepsys]");
        var theillnesss = $(formdiv+" input:text[name=illnesss]");
        var thelosiss = $(formdiv+" input:text[name=losiss]");
        var themellituss = $(formdiv+" input:text[name=mellituss]");
        var thehbps = $(formdiv+" input:text[name=hbps]");
        var theasthmatics = $(formdiv+" input:text[name=asthmatics]");
        var thehears = $(formdiv+" input:text[name=hears]");
        var thedocname = $(formdiv+" input:text[name=docname]");
        var thedocadd = $(formdiv+" textarea[name=docadd]");
        var thedoccountry = $(formdiv+" option:selected[name=doccountry]");
        var thedoctel = $(formdiv+" input[name=doctel]");
        var thedocmail = $(formdiv+" input[name=docmail]");

        if(currentmynav == 1)
        {
            var fielderror = 'mydefault';
            var fieldtherror = "Complete the form.";
            if(thehealthn.is(":checked")==true)
            {
                fielderror = '1';
            }else if(thehealthy.is(":checked")==true)
            {
                if(theprob.val()!='')
                {
                    fielderror='1';
                }else{
                    alert("Please give details.");
                }
            }else{
                alert(fieldtherror);
            }

            if(fielderror == '1')
            {
                if(themedicn.is(":checked")==true)
                {
                    fielderror = '2';
                }else if(themedicy.is(":checked")==true){
                    if(themed.val()!='')
                    {
                        fielderror='2';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '2')
            {
                if(theallergn.is(":checked")==true)
                {
                    fielderror = '3';
                }else if(theallergy.is(":checked")==true){
                    if(theallergic.val()!='')
                    {
                        fielderror='3';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '3')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 5";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 5)
                {
                     $('.mynavnt').addClass('disabled');
                     currentmynav = currentmynav - 1;
                     pagenum = currentmynav+" / 5";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#medform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#medform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavpv').addClass('disabled');
                    }else{
                        $('.mynavpv').removeClass('disabled');
                    }
                }
            }
        }else if(currentmynav == 2)
        {
            var fielderror = 'mydefault';
            var fieldtherror = "Complete the form.";
            if(thesurgn.is(":checked")==true)
            {
                fielderror = '1';
            }else if(thesurgy.is(":checked")==true)
            {
                if(thesurgical.val()!='')
                {
                    fielderror='1';
                }else{
                    alert("Please give details.");
                }
            }else{
                alert(fieldtherror);
            }

            if(fielderror == '1')
            {
                if(thehospn.is(":checked")==true)
                {
                    fielderror = '2';
                }else if(thehospy.is(":checked")==true){
                    if(thehospital.val()!='')
                    {
                        fielderror='2';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '2')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 5";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 5)
                {
                     $('.mynavnt').addClass('disabled');
                     currentmynav = currentmynav - 1;
                     pagenum = currentmynav+" / 5";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#medform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#medform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavpv').addClass('disabled');
                    }else{
                        $('.mynavpv').removeClass('disabled');
                    }
                }
            }
        }else if(currentmynav == 3)
        {
            var fielderror = 'mydefault';
            var fieldtherror = "Complete the form.";
            if(theasthman.is(":checked")==true)
            {
                fielderror = '1';
            }else if(theasthmay.is(":checked")==true)
            {
                if(theasthmatic.val()!='')
                {
                    fielderror='1';
                }else{
                    alert("Please give details.");
                }
            }else{
                alert(fieldtherror);
            }

            if(fielderror == '1')
            {
                if(thelepsyn.is(":checked")==true)
                {
                    fielderror = '2';
                }else if(thelepsyy.is(":checked")==true){
                    if(theepilepsy.val()!='')
                    {
                        fielderror='2';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '2')
            {
                if(thementaln.is(":checked")==true)
                {
                    fielderror = '3';
                }else if(thementaly.is(":checked")==true){
                    if(theillness.val()!='')
                    {
                        fielderror='3';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '3')
            {
                if(thetubern.is(":checked")==true)
                {
                    fielderror = '4';
                }else if(thetubery.is(":checked")==true){
                    if(thelosis.val()!='')
                    {
                        fielderror='4';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '4')
            {
                if(thedrugn.is(":checked")==true)
                {
                    fielderror = '5';
                }else if(thedrugy.is(":checked")==true){
                    if(theaddiction.val()!='')
                    {
                        fielderror='5';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '5')
            {
                if(theheartn.is(":checked")==true)
                {
                    fielderror = '6';
                }else if(thehearty.is(":checked")==true){
                    if(thehear.val()!='')
                    {
                        fielderror='6';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '6')
            {
                if(thekidneyn.is(":checked")==true)
                {
                    fielderror = '7';
                }else if(thekidneyy.is(":checked")==true){
                    if(thekid.val()!='')
                    {
                        fielderror='7';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '7')
            {
                if(thediabetesn.is(":checked")==true)
                {
                    fielderror = '8';
                }else if(thediabetesy.is(":checked")==true){
                    if(themellitus.val()!='')
                    {
                        fielderror='8';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '8')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 5";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 5)
                {
                     $('.mynavnt').addClass('disabled');
                     currentmynav = currentmynav - 1;
                     pagenum = currentmynav+" / 5";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#medform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#medform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavpv').addClass('disabled');
                    }else{
                        $('.mynavpv').removeClass('disabled');
                    }
                }
            }
        }else if(currentmynav == 4)
        {
            var fielderror = 'mydefault';
            var fieldtherror = "Complete the form.";
            if(thelepsysn.is(":checked")==true)
            {
                fielderror = '1';
            }else if(thelepsysy.is(":checked")==true)
            {
                if(theepilepsys.val()!='')
                {
                    fielderror='1';
                }else{
                    alert("Please give details.");
                }
            }else{
                alert(fieldtherror);
            }

            if(fielderror == '1')
            {
                if(thementalsn.is(":checked")==true)
                {
                    fielderror = '2';
                }else if(thementalsy.is(":checked")==true){
                    if(theillnesss.val()!='')
                    {
                        fielderror='2';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '2')
            {
                if(thetubersn.is(":checked")==true)
                {
                    fielderror = '3';
                }else if(thetubersy.is(":checked")==true){
                    if(thelosiss.val()!='')
                    {
                        fielderror='3';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '3')
            {
                if(thediabetessn.is(":checked")==true)
                {
                    fielderror = '4';
                }else if(thediabetessy.is(":checked")==true){
                    if(themellituss.val()!='')
                    {
                        fielderror='4';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '4')
            {
                if(thehbpn.is(":checked")==true)
                {
                    fielderror = '5';
                }else if(thehbpy.is(":checked")==true){
                    if(thehbps.val()!='')
                    {
                        fielderror='5';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '5')
            {
                if(theasthmasn.is(":checked")==true)
                {
                    fielderror = '6';
                }else if(theasthmasy.is(":checked")==true){
                    if(theasthmatics.val()!='')
                    {
                        fielderror='6';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '6')
            {
                if(theheartsn.is(":checked")==true)
                {
                    fielderror = '7';
                }else if(theheartsy.is(":checked")==true){
                    if(thehears.val()!='')
                    {
                        fielderror='7';
                    }else{
                        alert("Please give details.");
                    }
                }else{
                    alert(fieldtherror);
                }
            }

            if(fielderror == '7')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 5";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 5)
                {
                     $('.mynavnt').addClass('disabled');
                     currentmynav = currentmynav - 1;
                     pagenum = currentmynav+" / 5";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#medform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#medform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavpv').addClass('disabled');
                    }else{
                        $('.mynavpv').removeClass('disabled');
                    }
                }

                $('.save-link').removeClass('disabled');
            }
        }else if(currentmynav == 5)
        {
            var fielderror = 'mydefault';
            var fieldtherror = "Complete the form.";
            if(thedocn.is(":checked")==true)
            {
                fielderror = '1';
            }else if(thedocy.is(":checked")==true)
            {
                if(thedocname.val()!='')
                {
                    if(thedocadd.val()!='')
                    {
                        if(thedoccountry.val()!='')
                        {
                            if(thedoctel.val()!='')
                            {
                                if(isNaN(thedoctel.val()) == true)
                                {
                                    alert("Please input a valid phone number");
                                }else{
                                    var docphone = thedoctel.val();
                                    docphone = docphone.replace(/[^0-9]/g, '');
                                    if(docphone.length != 11)
                                    {
                                        alert("Doctor's phone number is not 11 digits.");
                                    }else{
                                        if(thedocmail.val()!='')
                                        {
                                            var filtermail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                                            if(!filtermail.test(thedocmail.val()))
                                            {
                                                alert("Please input a valid email address of the doctor.");
                                            }else{
                                                fielderror = '1';
                                            }
                                        }
                                    }
                                }
                            }else{
                                alert("You have not entered a phone number for the Doctor.");
                            }
                        }else{
                            alert("You have not selected a country of address for the Doctor.");
                        }
                    }else{
                        alert("You have not entered the address of the Doctor.");
                    }
                }else{
                    alert("You have not entered the name of your Doctor.");
                }
            }else{
                alert(fieldtherror);
            }

            if(fielderror == '1')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 5";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 5)
                {
                     $('.mynavnt').addClass('disabled');
                     currentmynav = currentmynav - 1;
                     pagenum = currentmynav+" / 5";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#medform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#medform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavpv').addClass('disabled');
                    }else{
                        $('.mynavpv').removeClass('disabled');
                    }
                }
            }
        }else{
            alert("Accept terms and conditions to proceed");
        }
    });

    $("#medprev").click(function(){
        currentmynav = currentmynav - 1;
        pagenum = currentmynav+" / 5";
        $("#pagethenum").val(pagenum);
        if(currentmynav < 1)
        {
             $('.mynavpv').addClass('disabled');
             currentmynav = 1;
             pagenum = currentmynav+" / 5";
            $("#pagethenum").val(pagenum);
        }else{
            $("#medform"+currentmynav).show();
            currentmynavminus = currentmynav + 1;
            $("#medform"+currentmynavminus).hide();
            if(currentmynav == 5)
            {
                $('.mynavnt').addClass('disabled');
            }else{
                $('.mynavnt').removeClass('disabled');
            }
        }
    });

    $("#stdform2").hide();
    $("#stdform3").hide();
    $("#stdform4").hide();
    $("#stdform5").hide();
    $("#stdform6").hide();
    $("#stdform7").hide();
    $("#stdform8").hide();
    $("#stdform9").hide();
    $("#stdform10").hide();
    $("#stdform11").hide();

    var currentmynav = 1;
    var pagenum = 1;
    $("#stdnext").click(function(){
        var forfalse = false;
        var formdiv = "#stdform"+currentmynav;
        var thecheckbox = $(formdiv+" input[type=checkbox]").is(':checked');
        var thetakecare = $(formdiv+" input[name=takecare]").is(':checked');
        var theunattnd = $(formdiv+" input[name=unattnd]").is(':checked');
        var thentloan = $(formdiv+" input[name=ntloan]").is(':checked');
        var theknwwhere = $(formdiv+" input[name=knwwhere]").is(':checked');
        var theapprop = $(formdiv+" input[name=appropriate]").is(':checked');
        var thescreen = $(formdiv+" input[name=screensaver]").is(':checked');
        var thentrespon = $(formdiv+" input[name=ntresponsible]").is(':checked');
        var theradio = $(formdiv+" input:radio[value=cult]").is(':checked');
        var thentradio = $(formdiv+" input:radio[value=ntcult]").is(':checked');
        var thetext = $(formdiv+" input:text[required]");
        var thecultgr = $(formdiv+" input:text[name=cultgr]");
        var thecultyr = $(formdiv+" input:text[name=cultyr]");
        var thecultin = $(formdiv+" input:text[name=cultin]");
        var theurmail = $(formdiv+" input[name=urmail]");
        var theurmailcode = $(formdiv+" input[name=urmailcode]");
        var theurtel = $(formdiv+" input[name=urtel]");
        var theurtelcode = $(formdiv+" input[name=urtelcode]");
        var thepname = $(formdiv+" input[name=pname]");
        var theptel = $(formdiv+" input[name=ptel]");
        var theptelcode = $(formdiv+" input[name=ptelcode]");
        var thepmail = $(formdiv+" input[name=pmail]");
        var thepmailcode = $(formdiv+" input[name=pmailcode]");
        var thenkname = $(formdiv+" input[name=nkname]");
        var thenktel = $(formdiv+" input[name=nktel]");
        var thenktelcode = $(formdiv+" input[name=nktelcode]");
        var thenkmail = $(formdiv+" input[name=nkmail]");
        var thenkmailcode = $(formdiv+" input[name=nkmailcode]");
        var thenumber = $(formdiv+" input[type=tel]");
        var thevnumber = $(formdiv+" input[type=tel]");
        var theemail = $(formdiv+" input[type=email]");
        var thevemail = $(formdiv+" input[type=email]");
        var thefile = $(formdiv+" input:file");
        var thepass = $(formdiv+" input[type=hidden]");
        var thetextarea = $(formdiv+" textarea[required]");
        var theuradd = $(formdiv+" textarea[name=uradd]");
        var theurpostadd = $(formdiv+" textarea[name=urpostadd]");
        var thenkadd = $(formdiv+" textarea[name=nkadd]");
        var thenkpostadd = $(formdiv+" textarea[name=nkpostadd]");
        var theculthp = $(formdiv+" textarea[name=culthp]");
        var thecultrs = $(formdiv+" textarea[name=cultrs]");
        var theculthv = $(formdiv+" textarea[name=culthv]");
        var thecultlv = $(formdiv+" textarea[name=cultlv]");
        var theselect = $(formdiv+" #thecountry option:selected");
        var theselect1 = $(formdiv+" #thecountry1 option:selected");
        var theselect2 = $(formdiv+" #thecountry2 option:selected");
        var theselect3 = $(formdiv+" #thecountry3 option:selected");
       // alert(thenumber.val());
        if(currentmynav==1 || currentmynav==2 || currentmynav==3 || currentmynav==4)
        {
           if(thecheckbox==true)
            {
                if(currentmynav == 1)
                {
                    $.ajax({
                        type:"POST",
                        url:"models/newreg.php",
                        data:{action:$("#contraband").val(), matno:$("#mymatno").val(), navid:'1'},
                        success:function(data){
                           }
                    });
                }else if(currentmynav == 2)
                {
                    $.ajax({
                        type:"POST",
                        url:"models/newreg.php",
                        data:{action:$("#indemity").val(), matno:$("#mymatno").val(), navid:'2'},
                        success:function(data){
                           }
                    });
                }else if(currentmynav == 3)
                {
                    $.ajax({
                        type:"POST",
                        url:"models/newreg.php",
                        data:{action:$("#residency").val(), matno:$("#mymatno").val(), navid:'3'},
                        success:function(data){
                           }
                    });
                }else if(currentmynav == 4)
                {
                    $.ajax({
                        type:"POST",
                        url:"models/newreg.php",
                        data:{action:$("#phone").val(), matno:$("#mymatno").val(), navid:'4'},
                        success:function(data){
                           }
                    });
                }

                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 11";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 11)
                {
                    $('.mynavst').addClass('disabled');
                    currentmynav = currentmynav - 1;
                    var pagenum = currentmynav+" / 11";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#stdform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#stdform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavsv').addClass('disabled');
                    }else{
                        $('.mynavsv').removeClass('disabled');
                    }
                }
            }else{
                alert("Accept terms and conditions to proceed.");
            }
        }
        else if(currentmynav== 5 || (currentmynav== 6 && thetext.val() != '') || (currentmynav== 7 && thetext.val() != '') || (currentmynav== 8 && thetext.val() != ''))
        {
            var fielderror = '';
            var fieldcount = 1;

            if(thetext.val() == '')
            {
                fielderror += fieldcount+". You have not entered a visitor's name.\n";
                fieldcount++;
            }

            if(thenumber.val() == '')
            {
                fielderror += fieldcount+". You have not entered a phone number.\n";
                fieldcount++;
            }else if(thevnumber.val() != '')
            {
                if(isNaN(thevnumber.val()) == true)
                {
                    fielderror += fieldcount+". Phone number is not a number.\n";
                    fieldcount++;
                }else{
                    var visphone = thevnumber.val();
                    visphone = visphone.replace(/[^0-9]/g, '');
                    if(visphone.length != 11)
                    {
                       fielderror += fieldcount+". Phone number is not 11 digits.\n";
                       fieldcount++;
                    }
                }
            }

            if(theemail.val() == '')
            {
                fielderror += fieldcount+". You have not entered an email address.\n";
                fieldcount++;
            }else if(thevemail.val() != '')
            {
                var filtermail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                if(!filtermail.test(thevemail.val()))
                {
                    fielderror += fieldcount+". Please input a valid email address.\n";
                    fieldcount++;
                }
            }

            if(thefile.val() == '' && thepass.val()=='')
            {
                fielderror += fieldcount+". You have not selected a picture.\n";
                fieldcount++;
            }

            if(thefile.val() != '')
            {
                if(thefile[0].files[0].type != 'image/jpeg')
                {
                    fielderror += fieldcount+". The picture format is not .jpeg \n";
                    fieldcount++;
                }
                if(thefile[0].files[0].size > 200000)
                {
                    fielderror += fieldcount+". The picture size is larger than 200KB \n";
                    fieldcount++;
                }
                if(thefile[0].files[0].size < 1)
                {
                    fielderror += fieldcount+". The picture size is small \n";
                    fieldcount++;
                }
            }

            if(thetextarea.val() == '')
            {
                fielderror += fieldcount+". You have not entered an address.\n";
                fieldcount++;
            }

            if(theselect.val() == '' || theselect1.val() == '' || theselect2.val() == '' || theselect3.val() == '')
            {
                fielderror += fieldcount+". You have not selected a country of address.\n";
                fieldcount++;
            }

            if(fielderror != '')
            {
                alert(fielderror);
            }else{
                if(currentmynav == 5)
                {
                    if(thepass.val() != ''){
                        $.ajax({
                            type:"POST",
                            url:"models/newreg.php",
                            data:{visname:$("#visname").val(), visadd:$("#visadd").val(), thecountry:$("#thecountry").val(), visstate:$("#visstate").val(), vistel:$("#vistel").val(), vismail:$("#vismail").val(), vispic:$("#vispictext").val(), matno:$("#mymatno").val(), navid:'5'},
                            success:function(data){
                               }
                        });
                    }
                    else{
	                    $.ajax({
	                        type:"POST",
	                        url:"models/newreg.php",
	                        data:{visname:$("#visname").val(), visadd:$("#visadd").val(), thecountry:$("#thecountry").val(), visstate:$("#visstate").val(), vistel:$("#vistel").val(), vismail:$("#vismail").val(), vispic:$("#vispic")[0].files[0].name, matno:$("#mymatno").val(), navid:'5'},
	                        success:function(data){
	                           }
	                    });

	                    var file_data = $("#vispic")[0].files[0];
	                    var form_data = new FormData();
	                    form_data.append('file', file_data);
	                    form_data.append('matno', $("#mymatno").val());
	                    form_data.append('visno', 1);
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("POST", 'models/newvis.php');
	                    xhr.send(form_data);
                    }
                }else if(currentmynav == 6)
                {
                    if(thepass.val() != ''){
                        $.ajax({
                            type:"POST",
                            url:"models/newreg.php",
                            data:{visname:$("#visname1").val(), visadd:$("#visadd1").val(), thecountry:$("#thecountry1").val(), visstate:$("#visstate1").val(), vistel:$("#vistel1").val(), vismail:$("#vismail1").val(), vispic:$("#vispictext1").val(), matno:$("#mymatno").val(), navid:'6'},
                            success:function(data){
                               }
                        });
                    }
                    else{
	                    $.ajax({
	                        type:"POST",
	                        url:"models/newreg.php",
	                        data:{visname:$("#visname1").val(), visadd:$("#visadd1").val(), thecountry:$("#thecountry1").val(), visstate:$("#visstate1").val(), vistel:$("#vistel1").val(), vismail:$("#vismail1").val(), vispic:$("#vispic1")[0].files[0].name, matno:$("#mymatno").val(), navid:'6'},
	                        success:function(data){
	                           }
	                    });
	                    // var file_data = $("#vispic1")[0].files[0];
	                    // var form_data = new FormData();
	                    // form_data.append('file', file_data);
	                    // form_data.append('matno', $("#mymatno").val());
	                    // form_data.append('visno', 2);
	                    // var xhr = new XMLHttpRequest();
	                    // xhr.open("POST", 'models/newvis.php');
	                    // xhr.send(form_data);
                    }
                }else if(currentmynav == 7)
                {
                    if(thepass.val() != ''){
                        $.ajax({
                            type:"POST",
                            url:"models/newreg.php",
	                        data:{visname:$("#visname2").val(), visadd:$("#visadd2").val(), thecountry:$("#thecountry2").val(), visstate:$("#visstate2").val(), vistel:$("#vistel2").val(), vismail:$("#vismail2").val(), vispic:$("#vispictext2").val(), matno:$("#mymatno").val(), navid:'7'},
	                        success:function(data){
                               }
                        });
                    }
                    else{
	                    $.ajax({
	                        type:"POST",
	                        url:"models/newreg.php",
	                        data:{visname:$("#visname2").val(), visadd:$("#visadd2").val(), thecountry:$("#thecountry2").val(), visstate:$("#visstate2").val(), vistel:$("#vistel2").val(), vismail:$("#vismail2").val(), vispic:$("#vispic2")[0].files[0].name, matno:$("#mymatno").val(), navid:'7'},
	                        success:function(data){
	                           }
	                    });
	                    var file_data = $("#vispic2")[0].files[0];
	                    var form_data = new FormData();
	                    form_data.append('file', file_data);
	                    form_data.append('matno', $("#mymatno").val());
	                    form_data.append('visno', 3);
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("POST", 'models/newvis.php');
	                    xhr.send(form_data);
                    }
                }else if(currentmynav == 8)
                {
                    if(thepass.val() != ''){
                        $.ajax({
                            type:"POST",
                            url:"models/newreg.php",
                            data:{visname:$("#visname3").val(), visadd:$("#visadd3").val(), thecountry:$("#thecountry3").val(), visstate:$("#visstate3").val(), vistel:$("#vistel3").val(), vismail:$("#vismail3").val(), vispic:$("#vispictext3").val(), matno:$("#mymatno").val(), navid:'8'},
	                        success:function(data){
                               }
                        });
                    }
                    else{
	                    $.ajax({
	                        type:"POST",
	                        url:"models/newreg.php",
	                        data:{visname:$("#visname3").val(), visadd:$("#visadd3").val(), thecountry:$("#thecountry3").val(), visstate:$("#visstate3").val(), vistel:$("#vistel3").val(), vismail:$("#vismail3").val(), vispic:$("#vispic2")[0].files[0].name, matno:$("#mymatno").val(), navid:'8'},
	                        success:function(data){
	                           }
	                    });

	                    var file_data = $("#vispic3")[0].files[0];
	                    var form_data = new FormData();
	                    form_data.append('file', file_data);
	                    form_data.append('matno', $("#mymatno").val());
	                    form_data.append('visno', 4);
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("POST", 'models/newvis.php');
	                    xhr.send(form_data);
	                }
                }
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 11";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 11)
                {
                    $('.mynavst').addClass('disabled');
                    currentmynav = currentmynav - 1;
                    var pagenum = currentmynav+" / 11";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#stdform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#stdform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavsv').addClass('disabled');
                    }else{
                        $('.mynavsv').removeClass('disabled');
                    }
                }
            }
        }else if((currentmynav== 6 && thetext.val() == '') || (currentmynav== 7 && thetext.val() == '') || (currentmynav== 8 && thetext.val() == ''))
        {
            currentmynav = currentmynav + 1;
            pagenum = currentmynav+" / 11";
            $("#pagethenum").val(pagenum);
            if(currentmynav > 11)
            {
                $('.mynavst').addClass('disabled');
                currentmynav = currentmynav - 1;
                var pagenum = currentmynav+" / 11";
                $("#pagethenum").val(pagenum);
            }else{
                $("#stdform"+currentmynav).show();
                currentmynavminus = currentmynav - 1;
                $("#stdform"+currentmynavminus).hide();
                if(currentmynav == 1)
                {
                    $('.mynavsv').addClass('disabled');
                }else{
                    $('.mynavsv').removeClass('disabled');
                }
            }
        }else if(currentmynav== 9)
        {
            if(thetakecare==true && theunattnd==true && thentloan==true && theknwwhere==true && theapprop==true && thescreen==true && thentrespon==true)
            {
                if(currentmynav == 9)
                {
                    $.ajax({
                        type:"POST",
                        url:"models/newreg.php",
                        data:{takecare:$("#takecare").val(), unattnd:$("#unattnd").val(), ntloan:$("#ntloan").val(), knwwhere:$("#knwwhere").val(), appropriate:$("#appropriate").val(), screensaver:$("#screensaver").val(), ntresponsible:$("#ntresponsible").val(), matno:$("#mymatno").val(), navid:'9'},
                        success:function(data){
                           }
                    });
                }
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 11";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 11)
                {
                    $('.mynavst').addClass('disabled');
                    currentmynav = currentmynav - 1;
                    var pagenum = currentmynav+" / 11";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#stdform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#stdform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavsv').addClass('disabled');
                    }else{
                        $('.mynavsv').removeClass('disabled');
                    }
                }
            }else{
                alert("Accept all terms and conditions to proceed.");
            }
        }else if(currentmynav==10)
        {
            if(theradio==true || thentradio==true)
            {
                var fielderror = 'mydefault';
                if(thentradio==true)
                {
                    fielderror = '';
                }else if(theradio==true)
                {
                    if(thecultgr.val()!='' && thecultyr.val()!='' && thecultin.val()!='')
                    {
                        if(theculthp.val()!='' && thecultrs.val()!='' && theculthv.val()!='' && thecultlv.val()!='')
                        {
                            fielderror = '';
                        }else{
                            alert("You have not completed the form.");
                        }
                    }else{
                        alert("You have not completed the form.");
                    }
                }

                if(fielderror == '')
                {
                    if(currentmynav == 10)
                    {
                        $.ajax({
                            type:"POST",
                            url:"models/newreg.php",
                            data:{cultgr:$("#cultgr").val(), cultyr:$("#cultyr").val(), cultin:$("#cultin").val(), culthp:$("#culthp").val(), cultrs:$("#cultrs").val(), culthv:$("#culthv").val(), cultlv:$("#cultlv").val(), cult:$("#cult").val(), matno:$("#mymatno").val(), navid:'11'},
                            success:function(data){
                               }
                        });
                    }
                    currentmynav = currentmynav + 1;
                    pagenum = currentmynav+" / 11";
                    $("#pagethenum").val(pagenum);
                    if(currentmynav > 11)
                    {
                        $('.mynavst').addClass('disabled');
                        currentmynav = currentmynav - 1;
                        var pagenum = currentmynav+" / 11";
                        $("#pagethenum").val(pagenum);
                    }else{
                        $("#stdform"+currentmynav).show();
                        currentmynavminus = currentmynav - 1;
                        $("#stdform"+currentmynavminus).hide();
                        if(currentmynav == 1)
                        {
                            $('.mynavsv').addClass('disabled');
                        }else{
                            $('.mynavsv').removeClass('disabled');
                        }
                    }
                    $('.save-link').removeClass('disabled');
                }
            }else if(theradio==false && thentradio==false){
                alert("You have not completed the form.");
            }
        }else if(currentmynav==11)
        {
            if(theurmail.val()!='' && theurmailcode.val()!='' && theurtel.val()!='' && theurtelcode.val()!='' && thepname.val()!='' && theptel.val()!='' && theptelcode.val()!='' && thepmail.val()!='' && thepmailcode.val()!='' && thenkname.val()!='' && thenktel.val()!='' && thenktelcode.val()!='' && thenkmail.val()!='' && thenkmailcode.val()!='' && theuradd.val()!='' && theurpostadd.val()!='' && thenkadd.val()!='' && thenkpostadd.val()!='')
            {
                currentmynav = currentmynav + 1;
                pagenum = currentmynav+" / 11";
                $("#pagethenum").val(pagenum);
                if(currentmynav > 11)
                {
                    $('.mynavst').addClass('disabled');
                    currentmynav = currentmynav - 1;
                    var pagenum = currentmynav+" / 11";
                    $("#pagethenum").val(pagenum);
                }else{
                    $("#stdform"+currentmynav).show();
                    currentmynavminus = currentmynav - 1;
                    $("#stdform"+currentmynavminus).hide();
                    if(currentmynav == 1)
                    {
                        $('.mynavsv').addClass('disabled');
                    }else{
                        $('.mynavsv').removeClass('disabled');
                    }
                }
            }else{
                alert("Complete the form and ensure you verify your details.");
            }
        }else{
            alert("Accept terms and conditions to proceed.");
        }
    });

    $("#stdprev").click(function(){
        currentmynav = currentmynav - 1;
        pagenum = currentmynav+" / 11";
        $("#pagethenum").val(pagenum);
        if(currentmynav < 1)
        {
             $('.mynavsv').addClass('disabled');
             currentmynav = 1;
             pagenum = currentmynav+" / 11";
            $("#pagethenum").val(pagenum);
        }else{
            $("#stdform"+currentmynav).show();
            currentmynavminus = currentmynav + 1;
            $("#stdform"+currentmynavminus).hide();
            if(currentmynav == 11)
            {
                $('.mynavst').addClass('disabled');
            }else{
                $('.mynavst').removeClass('disabled');
            }
        }
    });


    //Telephone and Email Verification
    $("#urmailv").hide();

    $("#urmailb").click(function() {
        // verify Email
        if($("#urmail").val() == '')
        {
            alert("No email address entered");
        }else{
            var filtermail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(filtermail.test($("#urmail").val()))
            {
                $.ajax({
                    type:"POST",
                    url:"models/vemail.php",
                    data:{action:$("#urmail").val()},
                    success:function(data){
                        $("#urmailv").show();
                        $("#urmailb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#urmailcode").attr("placeholder",data);
                            $("#urmailcode").attr("required",true);
                            $("#urmailcode").removeAttr("disabled");
                            $("#urmailcodeb").show();
                        }else{
                            $("#urmailcode").val(data);
                            $("#urmailcode").attr("disabled",true);
                            $("#urmailcode").removeAttr("required");
                            $("#urmailb").hide();
                            $("#urmailcodeb").hide();
                        }
                    }
                });
            }else{
                alert("Please input a valid email address!");
            }
        }
    });

    $("#urmailcodeb").click(function() {
        // verify Email Code
        if($("#urmailcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdemail.php",
                data:{action:$("#urmailcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#urmailcode").val('');
                        $("#urmailcode").attr("placeholder",data);
                        $("#urmailcode").attr("required",true);
                        $("#urmailcode").removeAttr("disabled");
                        $("#urmailb").show();
                        $("#urmailcodeb").hide();
                    }else{
                        $("#urmailcode").val(data);
                        $("#urmailcode").attr("disabled",true);
                        $("#urmailcode").removeAttr("required");
                        $("#urmailb").hide();
                        $("#urmailcodeb").hide();
                    }
                }
            });
        }
    });

    $("#urtelv").hide();

    $("#urtelb").click(function() {
        // verify Telephone
        if($("#urtel").val() == '')
        {
            alert("No phone number entered");
        }else{
            var thephone = $("#urtel").val();
            thephone = thephone.replace(/[^0-9]/g, '');
            if(thephone.length != 11)
            {
               alert("Phone number is not 11 digits");
            }else{
                $.ajax({
                    type:"POST",
                    url:"models/vtelephone.php",
                    data:{action:$("#urtel").val()},
                    success:function(data){
                        $("#urtelv").show();
                        $("#urtelb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#urtelcode").attr("placeholder",data);
                            $("#urtelcode").attr("required",true);
                            $("#urtelcode").removeAttr("disabled");
                            $("#urtelcodeb").show();
                        }else{
                            $("#urtelcode").val(data);
                            $("#urtelcode").attr("disabled",true);
                            $("#urtelcode").removeAttr("required");
                            $("#urtelb").hide();
                            $("#urtelcodeb").hide();
                        }
                    }
                });
            }
        }
    });

    $("#urtelcodeb").click(function() {
        // verify Telephone Code
        if($("#urtelcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdtelephone.php",
                data:{action:$("#urtelcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#urtelcode").val('');
                        $("#urtelcode").attr("placeholder",data);
                        $("#urtelcode").attr("required",true);
                        $("#urtelcode").removeAttr("disabled");
                        $("#urtelb").show();
                        $("#urtelcodeb").hide();
                    }else{
                        $("#urtelcode").val(data);
                        $("#urtelcode").attr("disabled",true);
                        $("#urtelcode").removeAttr("required");
                        $("#urtelb").hide();
                        $("#urtelcodeb").hide();
                    }
                }
            });
        }
    });

    $("#pmailv").hide();

    $("#pmailb").click(function() {
        // verify Email
        if($("#pmail").val() == '')
        {
            alert("No email address entered");
        }else{
            var filtermail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(filtermail.test($("#pmail").val()))
            {
                $.ajax({
                    type:"POST",
                    url:"models/vemail.php",
                    data:{action:$("#pmail").val()},
                    success:function(data){
                        $("#pmailv").show();
                        $("#pmailb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#pmailcode").attr("placeholder",data);
                            $("#pmailcode").attr("required",true);
                            $("#pmailcode").removeAttr("disabled");
                            $("#pmailcodeb").show();
                        }else{
                            $("#pmailcode").val(data);
                            $("#pmailcode").attr("disabled",true);
                            $("#pmailcode").removeAttr("required");
                            $("#pmailb").hide();
                            $("#pmailcodeb").hide();
                        }
                    }
                });
            }else{
                alert("Please input a valid email address!");
            }
        }
    });

    $("#pmailcodeb").click(function() {
        // verify Email Code
        if($("#pmailcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdemail.php",
                data:{action:$("#pmailcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#pmailcode").val('');
                        $("#pmailcode").attr("placeholder",data);
                        $("#pmailcode").attr("required",true);
                        $("#pmailcode").removeAttr("disabled");
                        $("#pmailb").show();
                        $("#pmailcodeb").hide();
                    }else{
                        $("#pmailcode").val(data);
                        $("#pmailcode").attr("disabled",true);
                        $("#pmailcode").removeAttr("required");
                        $("#pmailb").hide();
                        $("#pmailcodeb").hide();
                    }
                }
            });
        }
    });

    $("#ptelv").hide();

    $("#ptelb").click(function() {
        // verify Telephone
        if($("#ptel").val() == '')
        {
            alert("No phone number entered");
        }else{
            var thephone = $("#ptel").val();
            thephone = thephone.replace(/[^0-9]/g, '');
            if(thephone.length != 11)
            {
               alert("Phone number is not 11 digits");
            }else{
                $.ajax({
                    type:"POST",
                    url:"models/vtelephone.php",
                    data:{action:$("#ptel").val()},
                    success:function(data){
                        $("#ptelv").show();
                        $("#ptelb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#ptelcode").attr("placeholder",data);
                            $("#ptelcode").attr("required",true);
                            $("#ptelcode").removeAttr("disabled");
                            $("#ptelcodeb").show();
                        }else{
                            $("#ptelcode").val(data);
                            $("#ptelcode").attr("disabled",true);
                            $("#ptelcode").removeAttr("required");
                            $("#ptelb").hide();
                            $("#ptelcodeb").hide();
                        }
                    }
                });
            }
        }
    });

    $("#ptelcodeb").click(function() {
        // verify Telephone Code
        if($("#ptelcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdtelephone.php",
                data:{action:$("#ptelcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#ptelcode").val('');
                        $("#ptelcode").attr("placeholder",data);
                        $("#ptelcode").attr("required",true);
                        $("#ptelcode").removeAttr("disabled");
                        $("#ptelb").show();
                        $("#ptelcodeb").hide();
                    }else{
                        $("#ptelcode").val(data);
                        $("#ptelcode").attr("disabled",true);
                        $("#ptelcode").removeAttr("required");
                        $("#ptelb").hide();
                        $("#ptelcodeb").hide();
                    }
                }
            });
        }
    });

    $("#nkmailv").hide();

    $("#nkmailb").click(function() {
        // verify Email
        if($("#nkmail").val() == '')
        {
            alert("No email address entered");
        }else{
            var filtermail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(filtermail.test($("#nkmail").val()))
            {
                $.ajax({
                    type:"POST",
                    url:"models/vemail.php",
                    data:{action:$("#nkmail").val()},
                    success:function(data){
                        $("#nkmailv").show();
                        $("#nkmailb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#nkmailcode").attr("placeholder",data);
                            $("#nkmailcode").attr("required",true);
                            $("#nkmailcode").removeAttr("disabled");
                            $("#nkmailcodeb").show();
                        }else{
                            $("#nkmailcode").val(data);
                            $("#nkmailcode").attr("disabled",true);
                            $("#nkmailcode").removeAttr("required");
                            $("#nkmailb").hide();
                            $("#nkmailcodeb").hide();
                        }
                    }
                });
            }else{
                alert("Please input a valid email address!");
            }
        }
    });

    $("#nkmailcodeb").click(function() {
        // verify Email Code
        if($("#nkmailcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdemail.php",
                data:{action:$("#nkmailcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#nkmailcode").val('');
                        $("#nkmailcode").attr("placeholder",data);
                        $("#nkmailcode").attr("required",true);
                        $("#nkmailcode").removeAttr("disabled");
                        $("#nkmailb").show();
                        $("#nkmailcodeb").hide();
                    }else{
                        $("#nkmailcode").val(data);
                        $("#nkmailcode").attr("disabled",true);
                        $("#nkmailcode").removeAttr("required");
                        $("#nkmailb").hide();
                        $("#nkmailcodeb").hide();
                    }
                }
            });
        }
    });

    $("#nktelv").hide();

    $("#nktelb").click(function() {
        // verify Telephone
        if($("#nktel").val() == '')
        {
            alert("No phone number entered");
        }else{
            var thephone = $("#nktel").val();
            thephone = thephone.replace(/[^0-9]/g, '');
            if(thephone.length != 11)
            {
               alert("Phone number is not 11 digits");
            }else{
                $.ajax({
                    type:"POST",
                    url:"models/vtelephone.php",
                    data:{action:$("#nktel").val()},
                    success:function(data){
                        $("#nktelv").show();
                        $("#nktelb").hide();
                        if(data == 'Not Verified')
                        {
                            $("#nktelcode").attr("placeholder",data);
                            $("#nktelcode").attr("required",true);
                            $("#nktelcode").removeAttr("disabled");
                            $("#nktelcodeb").show();
                        }else{
                            $("#nktelcode").val(data);
                            $("#nktelcode").attr("disabled",true);
                            $("#nktelcode").removeAttr("required");
                            $("#nktelb").hide();
                            $("#nktelcodeb").hide();
                        }
                    }
                });
            }
        }
    });

    $("#nktelcodeb").click(function() {
        // verify Telephone Code
        if($("#nktelcode").val() == '')
        {
            alert("No Code entered");
        }else{
            $.ajax({
                type:"POST",
                url:"models/vdtelephone.php",
                data:{action:$("#nktelcode").val()},
                success:function(data){
                    if(data == 'Not Verified')
                    {
                        $("#nktelcode").val('');
                        $("#nktelcode").attr("placeholder",data);
                        $("#nktelcode").attr("required",true);
                        $("#nktelcode").removeAttr("disabled");
                        $("#nktelb").show();
                        $("#nktelcodeb").hide();
                    }else{
                        $("#nktelcode").val(data);
                        $("#nktelcode").attr("disabled",true);
                        $("#nktelcode").removeAttr("required");
                        $("#nktelb").hide();
                        $("#nktelcodeb").hide();
                    }
                }
            });
        }
    });

    //End of Telephone and Email Verification
});
