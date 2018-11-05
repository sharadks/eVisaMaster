function validate_registration_form(visa_type) {

    var submit = true;
    var missioncode_id_var = $('#missioncode_id').val();
    var nationality_id_var = $('#nationality_id').val();
    var visa_type_id = parseInt(visa_type);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var todayDate = dd + '/' + mm + '/' + yyyy;
    if (visa_type == 1 && missioncode_id_var == 'INDA' && nationality_id_var == 'PAK')
    {
        var age = cal_age(todayDate, $('#dob_id').val());
        if (age >= 65)
        {
            alert('The option is valid for:\n- Pakistan national of age above 65 years and arriving in India through "Attari Road" by foot only.\n- The applicant can arrive only after 72 hours of filling the application.\n- The applicant need to carry the printed online application along with relevant documents.\n- It is mandatory for the applicant to upload the photo in the online application.\n');
        }
        else {
            alert('The option is valid for:\n- Pakistan national of age above 65 years and arriving in India through "Attari Road" by foot only');
            submit = false;
        }

    }
    if (document.getElementById('countryname_id') != undefined) {
        if (visa_type_id == 1) {
            var result = validate_Country($('#countryname_id').val(), 1);
        }
        if (result != "true")
        {
            errorify($('#countryname_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#countryname_id'), "");
        }
    }

    if (document.getElementById('missioncode_id') != undefined) {
        result = validate_missionCode($('#missioncode_id').val(), 1);
        if (result != "true")
        {
            errorify($('#missioncode_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#missioncode_id'), "");
        }
    }
    if (document.getElementById('nationality_id') != undefined) {
        result = validate_Nationality($('#nationality_id').val(), 1);
        if (result != "true")
        {
            errorify($('#nationality_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#nationality_id'), "");
        }
    }
    if (document.getElementById('email_id') != undefined) {
        result = validate_email($('#email_id').val(), 1, visa_type);
        if (result != "true")
        {
            errorify($('#email_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#email_id'), "");
        }

    }

    if (document.getElementById('email_re_id') != undefined) {
        result = validate_email($('#email_re_id').val(), 1, visa_type);
        if (result != "true")
        {
            errorify($('#email_re_id'), result);
            submit = false;
        }
        else if ($('#email_id').val().toLowerCase() != $('#email_re_id').val().toLowerCase()) {
            result = "Email ids do not match.";
            errorify($('#email_re_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#email_re_id'), "");
        }
    }

    if (document.getElementById('ppt_type_id') != undefined) {
        result = validate_ppt_type_id($('#ppt_type_id').val(), 1);
        if (result == "true" && parseInt($('#ppt_type_id').val()) !== 1) {
            errorify($('#ppt_type_id'), "You are not eligibile for e-Visa service. Ordinary passport holders are allowed. You may approach concerned Indian Mission abroad.");
            submit = false;
            return submit;
        }
        if (result != "true")
        {
            errorify($('#ppt_type_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#ppt_type_id'), "");
        }
    }

    //validate evisa_Service
    var evisa_options = document.getElementsByName("evisa_service");
    var temp = false;
    for (var i = 0; i < evisa_options.length; i++) {
        if (evisa_options[i].checked) {

            //evisa_purpose_upar wali value
            var temp2 = false;
            $(".evisa_purpose_" + evisa_options[i].value).each(function() {

                if ($(this).prop("checked")) {
                    temp2 = true;
                }
            });
            if (temp2 == false) {
                submit = false;
                $('#evisa_ser_purpose_error').addClass("error1").html("").append("Please select purpose for " + decode_visa_service(evisa_options[i].value));
                temp = true;
                break;
            }
            temp = true;
        }
    }
    if (temp == false)
    {
        submit = false;
        $('#evisa_ser_purpose_error').addClass("error1").html("").append("Please select atleast one visa service");
    } else if (temp == true && temp2 == true) {
        $('#evisa_ser_purpose_error').removeClass("error1").html("");
    }



    if (document.getElementById('dob_id') != undefined) {
        $('#dob_id').val(changeDate($('#dob_id').val()));
        result = validate_dob($('#dob_id').val().trim(), 1);
        if (result != "true")
        {
            errorify($('#dob_id'), result);
            submit = false;
        }
        else {
            correctify($('#dob_id'), "");
        }
    }

    if (document.getElementById('jouryney_id') != undefined) {
        $('#jouryney_id').val(changeDate($('#jouryney_id').val()));
        result = validate_journeydate($('#jouryney_id').val(), 1, visa_type);

        if (result != "true")
        {
            errorify($('#jouryney_id'), result);
            submit = false;
        }
        else {
            correctify($('#jouryney_id'), "");
        }
    }
    if (document.getElementById('captcha') != undefined) {
        result = validate_captcha($('#captcha').val(), 1);
        if (result != "true")
        {
            errorify($('#captcha'), result);
            submit = false;
        }
        else {
            correctify_lowercase($('#captcha'), "");
        }
    }

    if ($('#read_instructions_check').prop("checked") == false) {
        $('#registration_common_error').html("").append("Please check that you have read instructions and document list");
        submit = false;
    } else {
        $('#registration_common_error').html("");
    }



    return submit;

}


function validate_basic_details_form(visa_type) {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "save and continue") {
        return validate_basic_details_continue_form(3);
    } else {
        return validate_basic_details_temp_exit();
    }
    return false;
}


function validate_basic_details_continue_form(visa_type_id) {

    var submit = true;
    if (document.getElementById('surname') != undefined) {
        var result = validate_surname($('#surname').val(), 0);
        if (result != "true")
        {
            errorify($('#surname'), result);
            $('#surname').parent().next().css('color', 'red');
            submit = false;
        }
        else
        {
            correctify($('#surname'), "Surname/Family Name (exactly as in Passport)");
            $('#surname').parent().next().css('color', '#A30B18');
        }
    }
    if (document.getElementById('givenName') != undefined) {
        result = validate_givenName($('#givenName').val(), 1);
        if (result != "true")
        {
            errorify($('#givenName'), result);
            $('#givenName').parent().next().css('color', 'red');
            submit = false;
        }
        else
        {
            correctify($('#givenName'), "Given Name/s (exactly as in Passport)");
            $('#givenName').parent().next().css('color', '#A30B18');
        }
    }
    if (document.getElementById('prev_surname') != undefined) {
        if (document.getElementById('changedSurnameCheck').checked == true) {
            result = validate_surname($('#prev_surname').val(), 1);
            if (result != "true")
            {
                errorify($('#prev_surname'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_surname'), "Previous Surname");
            }
        }
    }
    if (document.getElementById('prev_given_name') != undefined) {
        if (document.getElementById('changedSurnameCheck').checked == true) {
            result = validate_givenName($('#prev_given_name').val(), 1);
            if (result != "true")
            {
                errorify($('#prev_given_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_given_name'), "Previous given name");
            }
        }
    }

    if (document.getElementById('gender') != undefined) {
        result = validate_Gender($('#gender').val(), 1);
        if (result != "true")
        {
            errorify($('#gender'), result);
            submit = false;
        }
        else
        {
            correctify($('#gender'), "Gender");
        }
    }

    if (document.getElementById('birth_place') != undefined) {
        result = validate_placeOfBirth($('#birth_place').val(), 1);
        if (result != "true")
        {
            errorify($('#birth_place'), result);
            submit = false;
        }
        else
        {
            correctify($('#birth_place'), "Province/Town/City of birth");
        }
    }

    if (document.getElementById('country_birth') != undefined) {
        result = validate_Country_of_birth($('#country_birth').val(), 1);
        if (result != "true")
        {
            errorify($('#country_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#country_birth'), "Country of birth");
        }

    }

    if (document.getElementById('nic_number') != undefined) {
        result = validate_nic_no($('#nic_number').val(), 1);
        if (result != "true")
        {
            errorify($('#nic_number'), result);
            submit = false;
        }
        else
        {
            correctify($('#nic_number'), "If not applicable Please Type NA");
        }

    }
    if (document.getElementById('religion') != undefined) {
        result = validate_religion($('#religion').val(), 1);
        if (result != "true")
        {
            errorify($('#religion'), result);
            submit = false;
        }
        else
        {
            correctify($('#religion'), "If Others .Please specify");
        }
    }

    if (document.getElementById('religion_other') != undefined) {
        result = validate_religion($('#religion_other').val(), 0);
        if (result != "true")
        {
            errorify($('#religion_other'), result);
            submit = false;
        }
        else
        {
            correctify($('#religion_other'), "");
        }

    }

    if (document.getElementById('identity_marks') != undefined) {
        result = validate_VisibleMark($('#identity_marks').val(), 1);
        if (result != "true")
        {
            errorify($('#identity_marks'), result);
            submit = false;
        }
        else
        {
            correctify($('#identity_marks'), "Visible identification marks");
        }

    }

    if (document.getElementById('education') != undefined) {
        result = validate_Education($('#education').val(), 1);
        if (result != "true")
        {
            errorify($('#education'), result);
            submit = false;
        }
        else
        {
            correctify($('#education'), "Educational Qualification");
        }

    }

    if (document.getElementById('nationality_by') != undefined) {
        result = validate_nationality_Acquisition($('#nationality_by').val(), 1);
        if (result != "true")
        {
            errorify($('#nationality_by'), result);
            submit = false;
        }
        else
        {
            correctify($('#nationality_by'), "Did you acquire Nationality by birth or by naturalization?");
        }
    }

    if (document.getElementById('prev_nationality') != undefined) {
        if ($('#prev_nationality').val() == "By Birth") {
            result = validate_Nationality($('#prev_nationality').val(), 1);
            if (result != "true")
            {
                errorify($('#prev_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_nationality'), "Specify Previous Nationality");
            }
        }

    }

    if (document.getElementById('refer_flag1') != undefined) {
        if (document.getElementById('refer_flag1').checked == false && document.getElementById('refer_flag2').checked == false) {
            errorify($('#refer_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#refer_flag1'), "");
            correctify($('#refer_flag2'), "");
        }

    }

    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 1);
        if (result != "true")
        {
            errorify($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_no'), "Applicant's Passport Number");
        }

    }

    if (document.getElementById('passport_issue_place') != undefined) {
        result = validate_passportISsuePlace($('#passport_issue_place').val(), 1);
        if (result != "true")
        {
            errorify($('#passport_issue_place'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_issue_place'), "Place of Issue");
        }

    }
    if (document.getElementById('passport_issue_date') != undefined) {
        $('#passport_issue_date').val(changeDate($('#passport_issue_date').val()));
        result = validate_passportDateIssue($('#passport_issue_date').val(), 1);
        if (result != "true")
        {
            errorify($('#passport_issue_date'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_issue_date'), "In DD/MM/YYYY format");
        }

    }


    if (document.getElementById('passport_expiry_date') != undefined) {
        $('#passport_expiry_date').val(changeDate($('#passport_expiry_date').val()));
        var passport_expiry_date_var = $('#passport_expiry_date').val();
        var journey_date_var = $('#journey_date').val();

        passport_expiry_date_var = passport_expiry_date_var.replace(/^\s+|\s+$/gm, '');//trim
        journey_date_var = journey_date_var.replace(/^\s+|\s+$/gm, '');//trim
        result = validate_passport_Expiry_Date(passport_expiry_date_var, journey_date_var, visa_type_id, 1);
        if (result != "true")
        {
            errorify($('#passport_expiry_date'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_expiry_date'), "In DD/MM/YYYY format");
        }
    }

    if (document.getElementById('booklet_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {
        result = validate_Booklet_no($('#booklet_no').val(), 1);
        if (result != "true")
        {
            errorify($('#booklet_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#booklet_no'), "Booklet Number");
        }

    }

    if (document.getElementById('track_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {
        result = validate_track_no($('#track_no').val(), 1);
        if (result != "true")
        {
            errorify($('#track_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#track_no'), "Tracking Number");
        }

    }

    if (document.getElementById('previous_passport_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {

        result = validate_passportNo($('#previous_passport_no').val(), 0);
        if (result != "true")
        {
            errorify($('#previous_passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#previous_passport_no'), "Previous Passport Number");
        }

    }

    if (document.getElementById('other_ppt_1') != undefined) {
        if (document.getElementById('other_ppt_1').checked == false && document.getElementById('other_ppt_2').checked == false)
        {
            errorify($('#other_ppt_1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#other_ppt_1'), "");
            correctify($('#other_ppt_2'), "");
        }

    }

    if (document.getElementById('other_ppt_country_issue') != undefined) {

        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_other_passport_issue_country($('#other_ppt_country_issue').val(), 1);
            if (result != "true")
            {
                errorify($('#other_ppt_country_issue'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_country_issue'), "Country of Issue");
            }
        }

    }


    if (document.getElementById('other_ppt_no') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_passportNo($('#other_ppt_no').val(), 1);
            if (result != "true")
            {
                errorify($('#other_ppt_no'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_no'), "Passport No");
            }
        }
    }

    if (document.getElementById('other_ppt_issue_date') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_passportIssueDate($('#other_ppt_issue_date').val(), 1);
            if (result != "true")
            {
                errorify($('#other_ppt_issue_date'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_issue_date'), "In DD/MM/YYYY format");
            }
        }
    }

    if (document.getElementById('other_ppt_issue_place') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_passportISsuePlace($('#other_ppt_issue_place').val(), 1);
            if (result != "true")
            {
                errorify($('#other_ppt_issue_place'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_issue_place'), "Place of Issue");
            }
        }

    }

    if (document.getElementById('other_ppt_nat') != undefined) {

        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_other_passport_issue_country($('#other_ppt_nat').val(), 1);
            if (result != "true")
            {
                errorify($('#other_ppt_nat'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_nat'), "Nationality described therein");
            }
        }
    }

    return submit;
}


function validate_basic_details_temp_exit() {
    var submit = true;
    if (document.getElementById('surname') != undefined) {
        var result = validate_surname($('#surname').val(), 0);
        if (result != "true")
        {
            errorify($('#surname'), result);
            submit = false;
        }
        else
        {
            correctify($('#surname'), "Surname/Family Name (As in Passport)");
        }
    }

    if (document.getElementById('givenName') != undefined) {
        result = validate_givenName($('#givenName').val(), 1);
        if (result != "true")
        {
            errorify($('#givenName'), result);
            submit = false;
        }
        else
        {
            correctify($('#givenName'), "Given Name/s (As in Passport)");
        }
    }
    if (document.getElementById('prev_surname') != undefined) {
        if (document.getElementById('changedSurnameCheck').checked == true) {
            result = validate_surname($('#prev_surname').val(), 0);
            if (result != "true")
            {
                errorify($('#prev_surname'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_surname'), "Previous Surname");
            }
        }
    }
    if (document.getElementById('prev_given_name') != undefined) {
        if (document.getElementById('changedSurnameCheck').checked == true) {
            result = validate_givenName($('#prev_given_name').val(), 0);
            if (result != "true")
            {
                errorify($('#prev_given_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_given_name'), "Previous given name");
            }
        }
    }

    if (document.getElementById('gender') != undefined) {
        result = validate_Gender($('#gender').val(), 1);
        if (result != "true")
        {
            errorify($('#gender'), result);
            submit = false;
        }
        else
        {
            correctify($('#gender'), "Gender");
        }
    }

    if (document.getElementById('birth_place') != undefined) {
        result = validate_placeOfBirth($('#birth_place').val(), 0);
        if (result != "true")
        {
            errorify($('#birth_place'), result);
            submit = false;
        }
        else
        {
            correctify($('#birth_place'), "Province/Town/City of birth");
        }
    }

    if (document.getElementById('country_birth') != undefined) {
        result = validate_Country_of_birth($('#country_birth').val(), 0);
        if (result != "true")
        {
            errorify($('#country_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#country_birth'), "Country of birth");
        }

    }

    if (document.getElementById('nic_number') != undefined) {
        result = validate_nic_no($('#nic_number').val(), 0);
        if (result != "true")
        {
            errorify($('#nic_number'), result);
            submit = false;
        }
        else
        {
            correctify($('#nic_number'), "If not applicable Please Type NA");
        }

    }
    if (document.getElementById('religion') != undefined) {
        result = validate_religion($('#religion').val(), 1);
        if (result != "true")
        {
            errorify($('#religion'), result);
            submit = false;
        }
        else
        {
            correctify($('#religion'), "If Others .Please specify");
        }
    }

    if (document.getElementById('religion_other') != undefined) {
        result = validate_religion($('#religion_other').val(), 0);
        if (result != "true")
        {
            errorify($('#religion_other'), result);
            submit = false;
        }
        else
        {
            correctify($('#religion_other'), "");
        }

    }

    if (document.getElementById('identity_marks') != undefined) {
        result = validate_VisibleMark($('#identity_marks').val(), 0);
        if (result != "true")
        {
            errorify($('#identity_marks'), result);
            submit = false;
        }
        else
        {
            correctify($('#identity_marks'), "Visible identification marks");
        }

    }

    if (document.getElementById('education') != undefined) {
        result = validate_Education($('#education').val(), 0);
        if (result != "true")
        {
            errorify($('#education'), result);
            submit = false;
        }
        else
        {
            correctify($('#education'), "Educational Qualification");
        }

    }

    if (document.getElementById('nationality_by') != undefined) {
        result = validate_nationality_Acquisition($('#nationality_by').val(), 0);
        if (result != "true")
        {
            errorify($('#nationality_by'), result);
            submit = false;
        }
        else
        {
            correctify($('#nationality_by'), "Did you acquire Nationality by birth or by naturalization?");
        }
    }

    if (document.getElementById('prev_nationality') != undefined) {
        if ($('#prev_nationality').val() == "By Birth") {
            result = validate_Nationality($('#prev_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#prev_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#prev_nationality'), "Specify Previous Nationality");
            }
        }

    }

    if (document.getElementById('refer_flag1') != undefined) {
        if (document.getElementById('refer_flag1').checked == false && document.getElementById('refer_flag2').checked == false) {

            errorify($('#refer_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#refer_flag1'), "");
            correctify($('#refer_flag2'), "");
        }

    }

    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 0);
        if (result != "true")
        {
            errorify($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_no'), "Applicant's Passport Number");
        }

    }

    if (document.getElementById('passport_issue_place') != undefined) {
        result = validate_passportISsuePlace($('#passport_issue_place').val(), 0);
        if (result != "true")
        {
            errorify($('#passport_issue_place'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_issue_place'), "Place of Issue");
        }

    }
    if (document.getElementById('passport_issue_date') != undefined) {
        $('#passport_issue_date').val(changeDate($('#passport_issue_date').val()));
        result = validate_passportDateIssue($('#passport_issue_date').val(), 0);
        if (result != "true")
        {
            errorify($('#passport_issue_date'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_issue_date'), "In DD/MM/YYYY format");
        }

    }

    if (document.getElementById('passport_expiry_date') != undefined) {
        $('#passport_expiry_date').val(changeDate($('#passport_expiry_date').val()));
        var passport_expiry_date_var = $('#passport_expiry_date').val();
        var journey_date_var = $('#journey_date').val();

        passport_expiry_date_var = passport_expiry_date_var.replace(/^\s+|\s+$/gm, '');//trim
        journey_date_var = journey_date_var.replace(/^\s+|\s+$/gm, '');//trim
        result = validate_passport_Expiry_Date(passport_expiry_date_var, journey_date_var, 3, 0);
        if (result != "true")
        {
            errorify($('#passport_expiry_date'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_expiry_date'), "In DD/MM/YYYY format");
        }

    }

    if (document.getElementById('booklet_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {
        result = validate_Booklet_no($('#booklet_no').val(), 0);
        if (result != "true")
        {
            errorify($('#booklet_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#booklet_no'), "Booklet Number");
        }

    }

    if (document.getElementById('track_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {
        result = validate_track_no($('#track_no').val(), 0);
        if (result != "true")
        {
            errorify($('#track_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#track_no'), "Tracking Number");
        }

    }

    if (document.getElementById('previous_passport_no') != undefined && $('#nationality').val().toUpperCase() == "PAK") {

        result = validate_passportNo($('#previous_passport_no').val(), 0);
        if (result != "true")
        {
            errorify($('#previous_passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#previous_passport_no'), "Previous Passport Number");
        }

    }

    //    if(document.getElementById('other_ppt_1')!=undefined){
    //
    //        if(document.getElementById('other_ppt_1').checked==false && document.getElementById('other_ppt_2').checked==false){
    //            errorify($('#other_ppt_1'),"Please select yes or no");
    //            submit=false;
    //        }else{
    //            correctify($('#other_ppt_1'),"");
    //            correctify($('#other_ppt_1'),"");
    //        }
    //
    //
    //    }


    if (document.getElementById('other_ppt_country_issue') != undefined) {

        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_other_passport_issue_country($('#other_ppt_country_issue').val(), 0);
            if (result != "true")
            {
                errorify($('#other_ppt_country_issue'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_country_issue'), "Country of Issue");
            }
        }

    }


    if (document.getElementById('other_ppt_no') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_passportNo($('#other_ppt_no').val(), 0);
            if (result != "true")
            {
                errorify($('#other_ppt_no'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_no'), "Passport No");
            }
        }
    }

    if (document.getElementById('other_ppt_issue_date') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            $('#other_ppt_issue_date').val(changeDate($('#other_ppt_issue_date').val()));
            result = validate_passportIssueDate($('#other_ppt_issue_date').val(), 0);
            if (result != "true")
            {
                errorify($('#other_ppt_issue_date'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_issue_date'), "In DD/MM/YYYY format");
            }
        }
    }

    if (document.getElementById('other_ppt_issue_place') != undefined) {
        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_passportISsuePlace($('#other_ppt_issue_place').val(), 0);
            if (result != "true")
            {
                errorify($('#other_ppt_issue_place'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_issue_place'), "Place of Issue");
            }
        }

    }

    if (document.getElementById('other_ppt_nat') != undefined) {

        if (document.getElementById('other_ppt_1').checked == true) {
            result = validate_other_passport_issue_country($('#other_ppt_nat').val(), 0);
            if (result != "true")
            {
                errorify($('#other_ppt_nat'), result);
                submit = false;
            }
            else
            {
                correctify($('#other_ppt_nat'), "Nationality described therein");
            }
        }
    }

    return submit;
} //end of validate_basic_details_ temp exit form


function validate_family_details_form(visa_type) {

    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "save and continue") {
        return validate_family_details_continue_form(visa_type);
    } else {

        return validate_family_details_temp_exit(visa_type);
    }
    return false;
}


function validate_family_details_continue_form(visa_type) {
    var submit = true;
    var result = "";
    var visa_type_id = visa_type;
    //visa_type_id
    if (document.getElementById('pres_add1') != undefined) {
        result = validate_presAdd1($('#pres_add1').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add1'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add1'), "Applicant's Present Address. Maximum 35 characters (Each Line)");
        }

    }
    if (document.getElementById('pres_add2') != undefined) {
        result = validate_presAdd2($('#pres_add2').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add2'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add2'), "Village/Town/City");
        }
    }
    var pres_country_var = $('#pres_country').val();
    if (visa_type == '3' && pres_country_var == 'CHN') {
        if (document.getElementById('province_name') != undefined) {
            result = validate_presAdd3($('#province_name').val(), 1);
            if (result != "true")
            {
                errorify($('#province_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#province_name'), "State/Province/District");
            }
        }
    } else if (document.getElementById('pres_add3') != undefined) {
        result = validate_presAdd3($('#pres_add3').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add3'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add3'), "State/Province/District");
        }
    }
    if (document.getElementById('pincode') != undefined) {

        result = validate_pincode($('#pincode').val(), 1);
        if (result != "true")
        {
            errorify($('#pincode'), result);
            submit = false;
        }
        else
        {
            correctify($('#pincode'), "Postal/Zip Code");
        }

    }
    if (document.getElementById('pres_country') != undefined) {

        result = validate_Country($('#pres_country').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_country'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_country'), "Country");
        }

    }


    if (document.getElementById('pres_phone') != undefined && document.getElementById('mobile') != undefined) {
        if ($('#pres_phone').val() == "" && $('#mobile').val() == "") {
            errorify($('#pres_phone'), "Please provide atleast one contact no.");
            submit = false;
        }
        else if ($('#pres_phone').val() != "") {
            result = validate_phone($('#pres_phone').val(), 0);
            if (result != "true")
            {
                errorify($('#pres_phone'), result);
                submit = false;
            }
            else
            {
                correctify($('#pres_phone'), "One Contact No is Mandatory");
            }
        }
        else if ($('#mobile').val() != "") {
            result = validate_mobile_new($('#mobile').val(), 0);
            if (result != "true")
            {
                errorify($('#mobile'), result);
                submit = false;
            }
            else
            {
                correctify($('#mobile'), "Mobile Number");
            }
        }
    }

    if (document.getElementById('email_id') != undefined) {
        if (visa_type_id == 3) {
            result = validate_email($('#email_id').val(), 1);
        }
        else {
            result = validate_email($('#email_id').val(), 0);
        }
        if (result != "true")
        {
            errorify($('#email_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#email_id'), "Email Address");
        }

    }
    if (document.getElementById('perm_address1') != undefined) {
        result = validate_presAdd1($('#perm_address1').val(), 1);
        if (result != "true")
        {
            errorify($('#perm_address1'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address1'), "Applicant's Permanent Address(with Postal/Zip Code)");
        }

    }
    if (document.getElementById('perm_address2') != undefined) {
        result = validate_presAdd2($('#perm_address2').val(), 0);
        if (result != "true")
        {
            errorify($('#perm_address2'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address2'), "Village/Town/City");
        }
    }
    if (document.getElementById('perm_address3') != undefined) {
        result = validate_presAdd3($('#perm_address3').val(), 0);
        if (result != "true")
        {
            errorify($('#perm_address3'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address3'), "State/Province/District");
        }
    }
    if (document.getElementById('fthrname') != undefined) {
        result = validate_fatherName($('#fthrname').val(), 1);
        if (result != "true")
        {
            errorify($('#fthrname'), result);
            submit = false;
        }
        else
        {
            correctify($('#fthrname'), "Applicant's Father Number");
        }
    }
    if (document.getElementById('father_nationality') != undefined) {
        result = validate_Nationality($('#father_nationality').val(), 1);
        if (result != "true")
        {
            errorify($('#father_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_nationality'), "Father's Nationality");
        }
    }

    if (document.getElementById('father_previous_nationality') != undefined) {

        result = validate_Nationality($('#father_previous_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#father_previous_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_previous_nationality'), "Previous Nationality of Father");
        }


    }
    if (document.getElementById('father_place_of_birth') != undefined) {
        result = validate_placeOfBirth($('#father_place_of_birth').val(), 1);
        if (result != "true")
        {
            errorify($('#father_place_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_place_of_birth'), "Place of birth");
        }
    }

    if (document.getElementById('father_country_of_birth') != undefined) {
        result = validate_country($('#father_country_of_birth').val(), 1);
        if (result != "true")
        {
            errorify($('#father_country_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_country_of_birth'), "Country of birth");
        }
    }


    if (document.getElementById('mother_name') != undefined) {
        result = validate_motherName($('#mother_name').val(), 1);
        if (result != "true")
        {
            errorify($('#mother_name'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_name'), "Applicant's Mother Number");
        }
    }
    if (document.getElementById('mother_nationality') != undefined) {
        result = validate_Nationality($('#mother_nationality').val(), 1);
        if (result != "true")
        {
            errorify($('#mother_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_nationality'), "Mother's Nationality");
        }
    }

    if (document.getElementById('mother_previous_nationality') != undefined) {
        result = validate_Nationality($('#mother_previous_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_previous_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_previous_nationality'), "Previous Nationality of Mother");
        }

    }

    if (document.getElementById('mother_place_of_birth') != undefined) {
        result = validate_placeOfBirth($('#mother_place_of_birth').val(), 1);
        if (result != "true")
        {
            errorify($('#mother_place_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_place_of_birth'), "Place of birth");
        }

    }
    if (document.getElementById('mother_country_of_birth') != undefined) {
        result = validate_country($('#mother_country_of_birth').val(), 1);
        if (result != "true")
        {
            errorify($('#mother_country_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_country_of_birth'), "Country of birth");
        }

    }


    if (document.getElementById('marital_status') != undefined) {

        result = validate_MaritalStatus($('#marital_status').val(), 1);
        if (result != "true")
        {
            errorify($('#marital_status'), result);
            submit = false;
        }
        else
        {
            correctify($('#marital_status'), "Applicant´s Maritial Status");
        }

    }

    //only if married

    if (document.getElementById('spouse_name') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_spouseName($('#spouse_name').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_name'), "Spouse Name");
            }
        }
    }

    if (document.getElementById('spouse_nationality') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_Nationality($('#spouse_nationality').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_nationality'), "Spouse Nationality");
            }
        }
    }
    if (document.getElementById('spouse_previous_nationality') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_Nationality($('#spouse_previous_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_previous_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_previous_nationality'), "Spouse Previous Nationality");
            }
        }
    }

    if (document.getElementById('spouse_place_of_birth') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_placeOfBirth($('#spouse_place_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_place_of_birth'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_place_of_birth'), "Spouse place of birth");
            }
        }
    }
    if (document.getElementById('spouse_country_of_birth') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_country($('#spouse_country_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_country_of_birth'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_country_of_birth'), "Spouse country of birth");
            }
        }
    }

    if (document.getElementById('grandparent_flag1') != undefined) {
        if (document.getElementById('grandparent_flag1').checked == false && document.getElementById('grandparent_flag2').checked == false) {
            errorify($('#grandparent_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#grandparent_flag1'), "");
        }
    }

    if (document.getElementById('grandparent_details') != undefined) {
        if (document.getElementById('grandparent_flag1').checked == true) {
            result = validate_grandParentFlagDetails($('#grandparent_details').val(), 1);
            if (result != "true")
            {
                errorify($('#grandparent_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#grandparent_details'), "If Yes, give details");
            }
        }
    }

    if (document.getElementById('occupation') != undefined) {
        result = validate_Occupation($('#occupation').val(), 1);
        if (result != "true")
        {
            errorify($('#occupation'), result);
            submit = false;
        }
        else
        {
            correctify($('#occupation'), "If Others,please specify");
        }

    }
    if (document.getElementById('occupationOther') != undefined) {
        if ($('#occupation').val().toUpperCase() == "OTHERS") {
            result = validate_Occupation_Details($('#occupationOther').val(), 1);
            if (result != "true")
            {
                errorify($('#occupationOther'), result);
                submit = false;
            }
            else
            {
                correctify($('#occupationOther'), "");
            }
        }
    }


    if (document.getElementById('occ_flag') != undefined) {
        if ($('#occupation').val().toUpperCase() == "STUDENT" || $('#occupation').val().toUpperCase() == "HOUSE WIFE" || $('#occupation').val().toUpperCase() == "MINOR") {
            result = validate_occ_flag($('#occ_flag').val(), 1);
            if (result != "true")
            {
                errorify($('#occ_flag'), result);
                submit = false;
            }
            else
            {
                correctify($('#occ_flag'), "In case of HouseWife/Student/Minor Please specify Spouse/Parent's Occupation details.");
            }
        }
    }

    if (document.getElementById('empname') != undefined) {
        result = validate_employerName($('#empname').val(), 1);
        if (result != "true")
        {
            errorify($('#empname'), result);
            submit = false;
        }
        else
        {
            correctify($('#empname'), "Employer Name / Business");
        }
    }
    if (document.getElementById('empdesignation') != undefined) {
        result = validate_employerDesignation($('#empdesignation').val(), 0);
        if (result != "true")
        {
            errorify($('#empdesignation'), result);
            submit = false;
        }
        else
        {
            correctify($('#empdesignation'), "Designation");
        }

    }

    if (document.getElementById('empaddress') != undefined) {
        result = validate_EmployerAddress1($('#empaddress').val(), 1);
        if (result != "true")
        {
            errorify($('#empaddress'), result);
            submit = false;
        }
        else
        {
            correctify($('#empaddress'), "Address");
        }
    }

    if (document.getElementById('empphone') != undefined) {
        result = validate_phone($('#empphone').val(), 0);
        if (result != "true")
        {
            errorify($('#empphone'), result);
            submit = false;
        }
        else
        {
            correctify($('#empphone'), "Phone");
        }
    }
    if (document.getElementById('empdept') != undefined) {
        result = validate_employer_department($('#empdept').val(), 1);
        if (result != "true")
        {
            errorify($('#empdept'), result);
            submit = false;
        }
        else
        {
            correctify($('#empdept'), "Department");
        }

    }
    if (document.getElementById('empsalary') != undefined) {
        result = validate_employer_salary($('#empsalary').val(), 1);
        if (result != "true")
        {
            errorify($('#empsalary'), result);
            submit = false;
        }
        else
        {
            correctify($('#empsalary'), "Monthly Income");
        }
    }

    if (document.getElementById('previous_occupation') != undefined) { //not mandaotry

        result = validate_Occupation($('#previous_occupation').val(), 0);
        if (result != "true")
        {
            errorify($('#previous_occupation'), result);
            submit = false;
        }
        else
        {
            correctify($('#previous_occupation'), "Past Occupation, if any");
        }

    }

    if (document.getElementById('previous_occupation_details') != undefined) {
        if ($('#previous_occupation').val() == "OTHERS") {
            result = validate_Occupation_Details($('#previous_occupation_details').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_occupation_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_occupation'), "Specify if others");
            }
        }
    }

    if (document.getElementById('prev_org1') != undefined) {
        if (document.getElementById('prev_org1').checked == false && document.getElementById('prev_org2').checked == false) {
            errorify($('#prev_org1'), "Please select yes or no");
            submit = false;
        } else {

            correctify($('#prev_org1'), "If yes,give details");
        }

    }

    if (document.getElementById('previous_organization') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_organization').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_organization'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_organization'), "Organization");
            }

        }
    }

    if (document.getElementById('previous_designation') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_designation').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_designation'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_designation'), "Designation");
            }

        }
    }

    if (document.getElementById('previous_rank') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_rank').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_rank'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_rank'), "Rank");
            }

        }
    }

    if (document.getElementById('previous_posting') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_posting').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_posting'), result);
            }
            else
            {
                correctify($('#previous_posting'), "Place of Posting");
            }
        }
    }
    return submit;
}


function validate_family_details_temp_exit(visa_type) {
    var submit = true;
    var result = "";
    var visa_type_id = visa_type;

    if (document.getElementById('pres_add1') != undefined) {
        result = validate_presAdd1($('#pres_add1').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add1'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add1'), "Applicant's Present Address. Maximum 35 characters (Each Line)");
        }

    }
    if (document.getElementById('pres_add2') != undefined) {
        result = validate_presAdd2($('#pres_add2').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add2'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add2'), "Village/Town/City");
        }
    }
    var pres_country_var = $('#pres_country').val();
    if (visa_type == '3' && pres_country_var == 'CHN') {
        if (document.getElementById('province_name') != undefined) {
            result = validate_presAdd3($('#province_name').val(), 1);
            if (result != "true")
            {
                errorify($('#province_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#province_name'), "State/Province/District");
            }
        }
    } else if (document.getElementById('pres_add3') != undefined) {
        result = validate_presAdd3($('#pres_add3').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_add3'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_add3'), "State/Province/District");
        }
    }
    if (document.getElementById('pincode') != undefined) {

        result = validate_pincode($('#pincode').val(), 1);
        if (result != "true")
        {
            errorify($('#pincode'), result);
            submit = false;
        }
        else
        {
            correctify($('#pincode'), "Postal/Zip Code");
        }

    }
    if (document.getElementById('pres_country') != undefined) {

        result = validate_Country($('#pres_country').val(), 1);
        if (result != "true")
        {
            errorify($('#pres_country'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_country'), "Country");
        }

    }

    if (document.getElementById('pres_phone') != undefined) {
        result = validate_phone($('#pres_phone').val(), 0);
        if (result != "true")
        {
            errorify($('#pres_phone'), result);
            submit = false;
        }
        else
        {
            correctify($('#pres_phone'), "One Contact No is Mandatory");
        }
    }
    //pallavi
    if (document.getElementById('mobile') != undefined) {
        result = validate_mobile_new($('#mobile').val(), 0);
        if (result != "true")
        {
            errorify($('#mobile'), result);
            submit = false;
        }
        else
        {
            correctify($('#mobile'), "Mobile Number");
        }
    }
    if (document.getElementById('perm_address1') != undefined) {
        result = validate_presAdd1($('#perm_address1').val(), 1);
        if (result != "true")
        {
            errorify($('#perm_address1'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address1'), "Applicant's Permanent Address(with Postal/Zip Code)");
        }

    }
    if (document.getElementById('perm_address2') != undefined) {
        result = validate_presAdd2($('#perm_address2').val(), 0);
        if (result != "true")
        {
            errorify($('#perm_address2'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address2'), "Village/Town/City");
        }
    }
    if (document.getElementById('perm_address3') != undefined) {
        result = validate_presAdd3($('#perm_address3').val(), 0);
        if (result != "true")
        {
            errorify($('#perm_address3'), result);
            submit = false;
        }
        else
        {
            correctify($('#perm_address3'), "State/Province/District");
        }
    }
    if (document.getElementById('fthrname') != undefined) {
        result = validate_fatherName($('#fthrname').val(), 0);
        if (result != "true")
        {
            errorify($('#fthrname'), result);
            submit = false;
        }
        else
        {
            correctify($('#fthrname'), "Applicant's Father Number");
        }
    }
    if (document.getElementById('father_nationality') != undefined) {
        result = validate_Nationality($('#father_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#father_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_nationality'), "Father's Nationality");
        }
    }

    if (document.getElementById('father_previous_nationality') != undefined) {

        result = validate_Nationality($('#father_previous_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#father_previous_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_previous_nationality'), "Previous Nationality of Father");
        }


    }
    if (document.getElementById('father_place_of_birth') != undefined) {
        result = validate_placeOfBirth($('#father_place_of_birth').val(), 0);
        if (result != "true")
        {
            errorify($('#father_place_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_place_of_birth'), "Place of birth");
        }
    }

    if (document.getElementById('father_country_of_birth') != undefined) {
        result = validate_country($('#father_country_of_birth').val(), 0);
        if (result != "true")
        {
            errorify($('#father_country_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#father_country_of_birth'), "Country of birth");
        }
    }


    if (document.getElementById('mother_name') != undefined) {
        result = validate_motherName($('#mother_name').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_name'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_name'), "Applicant's Mother Name");
        }
    }
    if (document.getElementById('mother_nationality') != undefined) {
        result = validate_Nationality($('#mother_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_nationality'), "Mother's Nationality");
        }
    }

    if (document.getElementById('mother_previous_nationality') != undefined) {
        result = validate_Nationality($('#mother_previous_nationality').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_previous_nationality'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_previous_nationality'), "Previous Nationality of Mother");
        }

    }

    if (document.getElementById('mother_place_of_birth') != undefined) {
        result = validate_placeOfBirth($('#mother_place_of_birth').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_place_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_place_of_birth'), "Place of birth");
        }

    }
    if (document.getElementById('mother_country_of_birth') != undefined) {
        result = validate_country($('#mother_country_of_birth').val(), 0);
        if (result != "true")
        {
            errorify($('#mother_country_of_birth'), result);
            submit = false;
        }
        else
        {
            correctify($('#mother_country_of_birth'), "Country of birth");
        }

    }


    if (document.getElementById('marital_status') != undefined) {

        result = validate_MaritalStatus($('#marital_status').val(), 1);
        if (result != "true")
        {
            errorify($('#marital_status'), result);
            submit = false;
        }
        else
        {
            correctify($('#marital_status'), "Applicant´s Maritial Status");
        }

    }

    //only if married

    if (document.getElementById('spouse_name') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_spouseName($('#spouse_name').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_name'), "Spouse Name");
            }
        }
    }

    if (document.getElementById('spouse_nationality') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_Nationality($('#spouse_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_nationality'), "Spouse Nationality");
            }
        }
    }
    if (document.getElementById('spouse_previous_nationality') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_Nationality($('#spouse_previous_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_previous_nationality'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_previous_nationality'), "Spouse Previous Nationality");
            }
        }
    }

    if (document.getElementById('spouse_place_of_birth') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_placeOfBirth($('#spouse_place_of_birth').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_place_of_birth'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_place_of_birth'), "Spouse place of birth");
            }
        }
    }
    if (document.getElementById('spouse_country_of_birth') != undefined) {
        if ($('#marital_status').val() == '0') {
            result = validate_country($('#spouse_country_of_birth').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_country_of_birth'), result);
                submit = false;
            }
            else
            {
                correctify($('#spouse_country_of_birth'), "Spouse country of birth");
            }
        }
    }


    if (document.getElementById('grandparent_details') != undefined) {
        if (document.getElementById('grandparent_flag1').checked == true) {
            result = validate_grandParentFlagDetails($('#grandparent_details').val(), 0);
            if (result != "true")
            {
                errorify($('#grandparent_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#grandparent_details'), "If Yes, give details");
            }
        }
    }

    if (document.getElementById('occupation') != undefined) {
        result = validate_Occupation($('#occupation').val(), 0);
        if (result != "true")
        {
            errorify($('#occupation'), result);
            submit = false;
        }
        else
        {
            correctify($('#occupation'), "If Others,please specify");
        }

    }
    if (document.getElementById('occupationOther') != undefined) {
        if ($('#occupation').val().toUpperCase() == "OTHERS") {
            result = validate_Occupation_Details($('#occupationOther').val(), 0);
            if (result != "true")
            {
                errorify($('#occupationOther'), result);
                submit = false;
            }
            else
            {
                correctify($('#occupationOther'), "");
            }
        }
    }


    if (document.getElementById('occ_flag') != undefined) {
        if ($('#occupation').val().toUpperCase() == "STUDENT" || $('#occupation').val().toUpperCase() == "HOUSE WIFE" || $('#occupation').val().toUpperCase() == "MINOR") {
            result = validate_occ_flag($('#occ_flag').val(), 0);
            if (result != "true")
            {
                errorify($('#occ_flag'), result);
                submit = false;
            }
            else
            {
                correctify($('#occ_flag'), "In case of HouseWife/Student/Minor Please specify Spouse/Parent's Occupation details.");
            }
        }
    }

    if (document.getElementById('empname') != undefined) {
        result = validate_employerName($('#empname').val(), 0);
        if (result != "true")
        {
            errorify($('#empname'), result);
            submit = false;
        }
        else
        {
            correctify($('#empname'), "Employer Name / Business");
        }
    }
    if (document.getElementById('empdesignation') != undefined) {
        result = validate_employerDesignation($('#empdesignation').val(), 0);
        if (result != "true")
        {
            errorify($('#empdesignation'), result);
            submit = false;
        }
        else
        {
            correctify($('#empdesignation'), "Designation");
        }

    }

    if (document.getElementById('empaddress') != undefined) {
        result = validate_EmployerAddress1($('#empaddress').val(), 0);
        if (result != "true")
        {
            errorify($('#empaddress'), result);
            submit = false;
        }
        else
        {
            correctify($('#empaddress'), "Address");
        }
    }

    if (document.getElementById('empphone') != undefined) {
        result = validate_phone($('#empphone').val(), 0);
        if (result != "true")
        {
            errorify($('#empphone'), result);
            submit = false;
        }
        else
        {
            correctify($('#empphone'), "Phone");
        }
    }
    if (document.getElementById('empdept') != undefined) {
        result = validate_employer_department($('#empdept').val(), 0);
        if (result != "true")
        {
            errorify($('#empdept'), result);
            submit = false;
        }
        else
        {
            correctify($('#empdept'), "Department");
        }

    }
    if (document.getElementById('empsalary') != undefined) {
        result = validate_employer_salary($('#empsalary').val(), 0);
        if (result != "true")
        {
            errorify($('#empsalary'), result);
            submit = false;
        }
        else
        {
            correctify($('#empsalary'), "Monthly Income");
        }
    }

    if (document.getElementById('previous_occupation') != undefined) { //not mandaotry

        result = validate_Occupation($('#previous_occupation').val(), 0);
        if (result != "true")
        {
            errorify($('#previous_occupation'), result);
            submit = false;
        }
        else
        {
            correctify($('#previous_occupation'), "Past Occupation, if any");
        }

    }

    if (document.getElementById('previous_occupation_details') != undefined) {
        if ($('#previous_occupation').val() == "OTHERS") {
            result = validate_Occupation($('#previous_occupation_details').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_occupation_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_occupation'), "Specify if others");
            }
        }
    }



    if (document.getElementById('previous_organization') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_organization').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_organization'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_organization'), "Organization");
            }

        }
    }

    if (document.getElementById('previous_designation') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_designation').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_designation'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_designation'), "Designation");
            }

        }
    }

    if (document.getElementById('previous_rank') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_rank').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_rank'), result);
                submit = false;
            }
            else
            {
                correctify($('#previous_rank'), "Rank");
            }

        }
    }

    if (document.getElementById('previous_posting') != undefined) {
        if (document.getElementById('prev_org1').checked == true) {
            result = validate_organization($('#previous_posting').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_posting'), result);
            }
            else
            {
                correctify($('#previous_posting'), "Place of Posting");
            }
        }
    }
    return submit;
}


function validate_visa_details_form(visa_type) {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "save and continue") {
        return validate_visa_details_continue_form(visa_type);
    } else {

        return validate_visa_details_temp_exit(visa_type);
    }
    return false;
}


function validate_visa_details_temp_exit(visa_type) {    //
    var visa_type_id = visa_type;
    var submit = true;
    var result = "";


    //validating purpose question answers first
    $('.service_req_form_val').each(function(i, obj) {


        var label = $(this).parent().prev().html();
        label = $.trim(label.replace(/\s{2,}/g, ' '));

        if (label == "Places to be visited") {
            var res = validate_places_to_be_visited($(this).val(), "1");
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "") {
            var res = validate_places_to_be_visited($(this).val(), "0");
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Details of the Friend/Relative") {
            var res = validate_generic_alpha_sp($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address") {
            var res = validate_generic_address($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "State") {

            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "District") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Phone no") {
            var res = validate_phone($(this).val(), 0);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        //purpose code 23

        else if (label == "Name of the Institute in India") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 24
        else if (label == "Name of the Hospital where Medical treatment is to be carried out") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address of Hospital") {
            var res = validate_generic_address($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Type of Medical Treatment required") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 25
        else if (label == "Name") { //This is name of company
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address, Phone no" || label == "Address,Phone no") {
            var res = validate_generic_address_phoneno($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Website") {
            var res = validate_website($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                $(this).val($(this).val().replace(/(^\w+:|^)\/\//, ''));
                //result = url.replace(/(^\w+:|^)\/\//, '');
                correctify($(this), "");
            }
        }
        else if (label == "Nature of Business/Product") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 28

        else if (label == "Name and contact number of the company representative in India") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Nature of Job for which recruiting") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Places where recruitment is to be conducted") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        } else if (label == "Name and address of the Exhibition/trade fair") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        //purpose code 31
        else if (label == "Name and address of the Travel Agency in native country") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Cities to be visited during the tour") {
            var res = validate_generic_data($(this).val(), 0, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
    });


    if (document.getElementById('entrypoint') != undefined) {
        result = validate_entrypoint($('#entrypoint').val(), 1);
        if (result != "true")
        {
            errorify($('#entrypoint'), result);
            submit = false;
        }
        else
        {
            correctify($('#entrypoint'), "");
        }
    }

    if (document.getElementById('old_visa_flag1') != undefined) {
        if (document.getElementById('old_visa_flag1').checked == false && document.getElementById('old_visa_flag2').checked == false) {
            errorify($('#old_visa_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#old_visa_flag1'), "");
            correctify($('#old_visa_flag1'), "If yes,give details");
        }

    }

    if (document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
        //8 fields are there
        if (document.getElementById('prv_visit_add1') != undefined) {
            result = validate_presAdd1($('#prv_visit_add1').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add1'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add1'), "");
            }
        }

        if (document.getElementById('prv_visit_add2') != undefined) {

            result = validate_presAdd2($('#prv_visit_add2').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add2'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add2'), "");
            }
        }
        if (document.getElementById('prv_visit_add3') != undefined) {
            result = validate_presAdd3($('#prv_visit_add3').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add3'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add3'), "");
            }
        }

        if (document.getElementById('visited_city') != undefined) {
            result = validate_visited_city($('#visited_city').val(), 0);
            if (result != "true")
            {
                errorify($('#visited_city'), result);
                submit = false;
            }
            else
            {
                correctify($('#visited_city'), "Cities in India visited (comma separated)");
            }
        }
        if (document.getElementById('old_visa_no') != undefined) {
            result = validate_generic_alpha_num($('#old_visa_no').val(), 0, 10);
            if (result != "true")
            {
                errorify($('#old_visa_no'), result);
                submit = false;
            }
            else
            {
                correctify($('#old_visa_no'), "Last Indian Visa no / Currently valid Visa no");
            }
        }

        if (document.getElementById('old_visa_type_id') != undefined) {
            result = validate_visa_service($('#old_visa_type_id').val(), 0);
            if (result != "true")
            {
                errorify($('#old_visa_type_id'), result);
                submit = false;
            }
            else
            {
                correctify($('#old_visa_type_id'), "Type of Visa");
            }
        }

        if (document.getElementById('oldvisaissueplace') != undefined) {
            result = validate_generic_alpha_sp($('#oldvisaissueplace').val(), 0, 50);
            if (result != "true")
            {
                errorify($('#oldvisaissueplace'), result);
                submit = false;
            }
            else
            {
                correctify($('#oldvisaissueplace'), "Place of Issue");
            }
        }
        if (document.getElementById('oldvisaissuedate') != undefined) {
            $('#oldvisaissuedate').val(changeDate($('#oldvisaissuedate').val()));
            result = validate_visaIssueDate($('#oldvisaissuedate').val(), 0);
            if (result != "true")
            {
                errorify($('#oldvisaissuedate'), result);
                submit = false;
            }
            else
            {
                correctify($('#oldvisaissuedate'), "Date of Issue");
            }
        }
    } //end of document.getElementById('old_visa_flag1').checked=true

    if (document.getElementById('refuse_flag1') != undefined) {
        if (document.getElementById('refuse_flag1').checked == false && document.getElementById('refuse_flag2').checked == false) {
            errorify($('#refuse_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#refuse_flag1'), "");
            correctify($('#refuse_flag1'), "If yes,give details");
        }

    }

    if (document.getElementById('refuse_flag1') != undefined && document.getElementById('refuse_flag1').checked == true) {
        //8 fields are there
        if (document.getElementById('refuse_details') != undefined) {
            result = validate_generic_address($('#refuse_details').val(), 0, 100);
            if (result != "true")
            {
                errorify($('#refuse_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#refuse_details'), "");
            }
        }
    }


    if (document.getElementById('country_visited') != undefined) {
        result = validate_generic_address($('#country_visited').val(), 0, 100);
        if (result != "true")
        {
            errorify($('#country_visited'), result);
            submit = false;
        }
        else
        {
            correctify($('#country_visited'), "");
        }
    }
    if (document.getElementById('saarc_flag1') != undefined) {
        if (document.getElementById('saarc_flag1').checked == false && document.getElementById('saarc_flag2').checked == false) {
            errorify($('#saarc_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#saarc_flag1'), "");
            correctify($('#saarc_flag1'), "If yes,give details");
        }

    }
    if (document.getElementById('saarc_flag1') != undefined && document.getElementById('saarc_flag1').checked == true) {
        //now validate all the saarc fields


        if (document.getElementsByClassName('.saarcCountry') != undefined)
        {
            //pallavi

            for (var i = 1; i <= $('#saarcFieldsFilled').val(); i++) {

                result = validate_Country_of_birth($('#saarcCountry' + i).val(), 1);
                if (result != "true")
                {
                    $('#saarcCountry' + i).addClass("error1");
                    $('#saarcCountry1').parent().next().next().next().next().empty().addClass("error1").append(result);
                    //errorify_saarc($('#saarcCountry1'), result);
                    submit = false;
                }
                else
                {
                    $('#saarcCountry' + i).removeClass("error1");
                    $('#saarcCountry' + i).parent().next().next().next().next().empty();
                }

                result = validate_generic_number($('#saarcYear' + i).val(), 1, 4);
                if (result != "true")
                {
                    $('#saarcYear' + i).addClass("error1");
                    // errorify_saarc2($('#saarcYear1'), result);
                    $('#saarcYear1').parent().next().next().next().empty().addClass("error1").append(result);
                    submit = false;
                }
                else
                {
                    $('#saarcYear' + i).removeClass("error1");
                    $('#saarcYear1').parent().next().next().next().empty();
                //correctify_saarc2($('#saarcYear1'), "");
                }
                //third one

                result = validate_generic_number($('#saarcVisitNo' + i).val(), 1, 3);

                if (result != "true")
                {
                    $('#saarcVisitNo1' + i).addClass("error1");
                    //errorify_saarc3($('#saarcVisitNo1'), result);
                    $('#saarcVisitNo1').parent().next().next().empty().addClass("error1").append(result);
                    submit = false;
                }
                else
                {
                    $('#saarcVisitNo1' + i).removeClass("error1");
                    $('#saarcVisitNo1' + i).parent().next().next().empty();
                //correctify_saarc3($('#saarcVisitNo1'), "");
                }
            }
        }


    }//end of saarc1 checked

    if (document.getElementById('nameofsponsor_ind') != undefined) {
        result = validate_address_regex($('#nameofsponsor_ind').val(), 0, 50);
        if (result != "true")
        {
            errorify($('#nameofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#nameofsponsor_ind'), "");
        }
    }
    if (document.getElementById('add1ofsponsor_ind') != undefined) {
        result = validate_generic_address($('#add1ofsponsor_ind').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add1ofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#add1ofsponsor_ind'), "");
        }

    }
    if (document.getElementById('add2ofsponsor_ind') != undefined) {
        result = validate_generic_address($('#add2ofsponsor_ind').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add2ofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#add2ofsponsor_ind'), "");
        }

    }

    if (document.getElementById('phoneofsponsor_ind') != undefined) {
        result = validate_phone($('#phoneofsponsor_ind').val(), 0);
        if (result != "true")
        {
            errorify($('#phoneofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#phoneofsponsor_ind'), "Phone no");
        }
    }

    if (document.getElementById('nameofsponsor_msn') != undefined) {
        result = validate_address_regex($('#nameofsponsor_msn').val(), 0, 50);
        if (result != "true")
        {
            errorify($('#nameofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#nameofsponsor_msn'), "");
        }
    }

    if (document.getElementById('add1ofsponsor_msn') != undefined) {
        result = validate_generic_address($('#add1ofsponsor_msn').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add1ofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#add1ofsponsor_msn'), "");
        }

    }

    if (document.getElementById('add2ofsponsor_msn') != undefined) {
        result = validate_generic_address($('#add2ofsponsor_msn').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add2ofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#add2ofsponsor_msn'), "");
        }

    }
    if (document.getElementById('phoneofsponsor_msn') != undefined) {
        result = validate_phone($('#phoneofsponsor_msn').val(), 0);
        if (result != "true")
        {
            errorify($('#phoneofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#phoneofsponsor_msn'), "Phone no");
        }
    }

    return submit;

}



function validate_visa_details_continue_form(visa_type) {
    //
    var visa_type_id = parseInt(visa_type);
    var submit = true;
    var result = "";

    //validating purpose question answers first
    $('.service_req_form_val').each(function(i, obj) {


        var label = $(this).parent().prev().html();
        label = $.trim(label.replace(/\s{2,}/g, ' '));

        if (label == "Places to be visited") {
            var res = validate_places_to_be_visited($(this).val(), "1");
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "") {
            var res = validate_places_to_be_visited($(this).val(), "0");
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Details of the Friend/Relative") {
            var res = validate_generic_alpha_sp($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address") {
            var res = validate_generic_address($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "State") {

            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "District") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Phone no") {
            var res = validate_phone($(this).val(), 1);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        //purpose code 23

        else if (label == "Name of the Institute in India") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 24
        else if (label == "Name of the Hospital where Medical treatment is to be carried out") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address of Hospital") {
            var res = validate_generic_address($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Type of Medical Treatment required") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 25
        else if (label == "Name") { //This is name of company
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Address, Phone no" || label == "Address,Phone no") {
            var res = validate_generic_address_phoneno($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Website") {
            var res = validate_website($(this).val(), "1", 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                $(this).val($(this).val().replace(/(^\w+:|^)\/\//, ''));
                correctify($(this), "");
            }
        }
        else if (label == "Nature of Business/Product") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }

        //purpose code 28

        else if (label == "Name and contact number of the company representative in India") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Nature of Job for which recruiting") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Places where recruitment is to be conducted") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        } else if (label == "Name and address of the Exhibition/trade fair") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        //purpose code 31
        else if (label == "Name and address of the Travel Agency in native country") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }
        else if (label == "Cities to be visited during the tour") {
            var res = validate_generic_data($(this).val(), 1, 50);
            if (res != "true")
            {
                submit = false;
                errorify($(this), res);
            }
            else {
                correctify($(this), "");
            }
        }


    });



    if (document.getElementById('exitpoint') != undefined) {
        result = validate_exitPoint($('#exitpoint').val(), 0);
        if (result != "true")
        {
            errorify($('#exitpoint'), result);
            submit = false;
        }
        else
        {
            correctify($('#exitpoint'), "");
        }
    }

    if (document.getElementById('old_visa_flag1') != undefined) {
        if (document.getElementById('old_visa_flag1').checked == false && document.getElementById('old_visa_flag2').checked == false) {
            errorify($('#old_visa_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#old_visa_flag1'), "");
            correctify($('#old_visa_flag1'), "If yes,give details");
        }
    }

    if (document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
        //8 fields are there
        if (document.getElementById('prv_visit_add1') != undefined) {
            result = validate_presAdd1($('#prv_visit_add1').val(), 1);
            if (result != "true")
            {
                errorify($('#prv_visit_add1'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add1'), "");
            }
        }

        if (document.getElementById('prv_visit_add2') != undefined) {
            result = validate_presAdd2($('#prv_visit_add2').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add2'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add2'), "");
            }
        }
        if (document.getElementById('prv_visit_add3') != undefined) {
            result = validate_presAdd3($('#prv_visit_add3').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add3'), result);
                submit = false;
            }
            else
            {
                correctify($('#prv_visit_add3'), "");
            }
        }

        if (document.getElementById('visited_city') != undefined) {
            result = validate_visited_city($('#visited_city').val(), 1);
            if (result != "true")
            {
                errorify($('#visited_city'), result);
                submit = false;
            }
            else
            {
                correctify($('#visited_city'), "Cities in India visited (comma separated)");
            }
        }
        if (document.getElementById('old_visa_no') != undefined) {
            result = validate_generic_alpha_num($('#old_visa_no').val(), 1, 10);
            if (result != "true")
            {
                errorify($('#old_visa_no'), result);
                submit = false;
            }
            else
            {
                correctify($('#old_visa_no'), "Last Indian Visa no / Currently valid Visa no");
            }
        }

        if (document.getElementById('old_visa_type_id') != undefined) {
            result = validate_visa_service($('#old_visa_type_id').val(), 1);
            if (result != "true")
            {
                errorify($('#old_visa_type_id'), result);
                submit = false;
            }
            else
            {
                correctify($('#old_visa_type_id'), "Type of Visa");
            }
        }

        if (document.getElementById('oldvisaissueplace') != undefined) {
            result = validate_generic_alpha_sp($('#oldvisaissueplace').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#oldvisaissueplace'), result);
                submit = false;
            }
            else
            {
                correctify($('#oldvisaissueplace'), "Place of Issue");
            }
        }
        if (document.getElementById('oldvisaissuedate') != undefined) {
            $('#oldvisaissuedate').val(changeDate($('#oldvisaissuedate').val()));
            result = validate_visaIssueDate($('#oldvisaissuedate').val(), 1);
            if (result != "true")
            {
                errorify($('#oldvisaissuedate'), result);
                submit = false;
            }
            else
            {
                correctify($('#oldvisaissuedate'), "Date of Issue");
            }
        }
    } //end of document.getElementById('old_visa_flag1').checked=true

    if (document.getElementById('refuse_flag1') != undefined) {
        if (document.getElementById('refuse_flag1').checked == false && document.getElementById('refuse_flag2').checked == false) {
            errorify($('#refuse_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#refuse_flag1'), "");
            correctify($('#refuse_flag1'), "If yes,give details");
        }

    }

    if (document.getElementById('refuse_flag1') != undefined && document.getElementById('refuse_flag1').checked == true) {
        //8 fields are there
        if (document.getElementById('refuse_details') != undefined) {
            result = validate_generic_address($('#refuse_details').val(), 1, 100);
            if (result != "true")
            {
                errorify($('#refuse_details'), result);
                submit = false;
            }
            else
            {
                correctify($('#refuse_details'), "");
            }
        }
    }


    if (document.getElementById('country_visited') != undefined) {
        result = validate_generic_address($('#country_visited').val(), 0, 100);
        if (result != "true")
        {
            errorify($('#country_visited'), result);
            submit = false;
        }
        else
        {
            correctify($('#country_visited'), "");
        }
    }
    if (document.getElementById('saarc_flag1') != undefined) {
        if (document.getElementById('saarc_flag1').checked == false && document.getElementById('saarc_flag2').checked == false) {
            errorify($('#saarc_flag1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#saarc_flag1'), "");
            correctify($('#saarc_flag1'), "If yes,give details");
        }

    }
    if (document.getElementById('saarc_flag1') != undefined && document.getElementById('saarc_flag1').checked == true) {
        //now validate all the saarc fields
        if (document.getElementsByClassName('.saarcCountry') != undefined)
        {


            for (var i = 1; i <= $('#saarcFieldsFilled').val(); i++) {

                result = validate_Country_of_birth($('#saarcCountry' + i).val(), 1);
                if (result != "true")
                {
                    $('#saarcCountry' + i).addClass("error1");
                    $('#saarcCountry1').parent().next().next().next().next().empty().addClass("error1").append(result);
                    //errorify_saarc($('#saarcCountry1'), result);
                    submit = false;
                }
                else
                {
                    $('#saarcCountry' + i).removeClass("error1");
                    $('#saarcCountry' + i).parent().next().next().next().next().empty();
                }

                result = validate_generic_number($('#saarcYear' + i).val(), 1, 4);
                if (result != "true")
                {
                    $('#saarcYear' + i).addClass("error1");
                    // errorify_saarc2($('#saarcYear1'), result);
                    $('#saarcYear1').parent().next().next().next().empty().addClass("error1").append(result);
                    submit = false;
                }
                else
                {
                    $('#saarcYear' + i).removeClass("error1");
                    $('#saarcYear1').parent().next().next().next().empty();
                //correctify_saarc2($('#saarcYear1'), "");
                }
                //third one

                result = validate_generic_number($('#saarcVisitNo' + i).val(), 1, 3);

                if (result != "true")
                {
                    $('#saarcVisitNo1' + i).addClass("error1");
                    //errorify_saarc3($('#saarcVisitNo1'), result);
                    $('#saarcVisitNo1').parent().next().next().empty().addClass("error1").append(result);
                    submit = false;
                }
                else
                {
                    $('#saarcVisitNo1' + i).removeClass("error1");
                    $('#saarcVisitNo1' + i).parent().next().next().empty();
                //correctify_saarc3($('#saarcVisitNo1'), "");
                }
            }
        }



    }//end of saarc1 checked

    if (document.getElementById('nameofsponsor_ind') != undefined) {
        result = validate_address_regex($('#nameofsponsor_ind').val(), 1, 50);
        if (result != "true")
        {
            errorify($('#nameofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#nameofsponsor_ind'), "");
        }
    }
    if (document.getElementById('add1ofsponsor_ind') != undefined) {
        result = validate_generic_address($('#add1ofsponsor_ind').val(), 1, 35);
        if (result != "true")
        {
            errorify($('#add1ofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#add1ofsponsor_ind'), "");
        }

    }
    if (document.getElementById('add2ofsponsor_ind') != undefined) {
        result = validate_generic_address($('#add2ofsponsor_ind').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add2ofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#add2ofsponsor_ind'), "");
        }

    }

    if (document.getElementById('phoneofsponsor_ind') != undefined) {
        result = validate_phone($('#phoneofsponsor_ind').val(), 1);
        if (result != "true")
        {
            errorify($('#phoneofsponsor_ind'), result);
            submit = false;
        }
        else
        {
            correctify($('#phoneofsponsor_ind'), "Phone no");
        }
    }

    if (document.getElementById('nameofsponsor_msn') != undefined) {
        result = validate_address_regex($('#nameofsponsor_msn').val(), 1, 50);
        if (result != "true")
        {
            errorify($('#nameofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#nameofsponsor_msn'), "");
        }
    }

    if (document.getElementById('add1ofsponsor_msn') != undefined) {
        result = validate_generic_address($('#add1ofsponsor_msn').val(), 1, 35);
        if (result != "true")
        {
            errorify($('#add1ofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#add1ofsponsor_msn'), "");
        }

    }

    if (document.getElementById('add2ofsponsor_msn') != undefined) {
        result = validate_generic_address($('#add2ofsponsor_msn').val(), 0, 35);
        if (result != "true")
        {
            errorify($('#add2ofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#add2ofsponsor_msn'), "");
        }

    }
    if (document.getElementById('phoneofsponsor_msn') != undefined) {
        result = validate_phone($('#phoneofsponsor_msn').val(), 1);
        if (result != "true")
        {
            errorify($('#phoneofsponsor_msn'), result);
            submit = false;
        }
        else
        {
            correctify($('#phoneofsponsor_msn'), "Phone no");
        }
    }

    return submit;

}


function validate_pak_visit_form_continue() {
    //
    var submit = true;
    var result = "";
    if (document.getElementById('verifier_name') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_name').val(), 1, 75);

        if (result != "true")
        {
            errorify($('#verifier_name'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_name'), "");
        }
    }
    if (document.getElementById('verifier_phone') != undefined) {
        result = validate_phone($('#verifier_phone').val(), 0);

        if (result != "true")
        {
            errorify($('#verifier_phone'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_phone'), "");
        }
    }
    if (document.getElementById('verifier_org') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_org').val(), 1, 50);

        if (result != "true")
        {
            errorify($('#verifier_org'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_org'), "");
        }
    }
    if (document.getElementById('verifier_desg') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_desg').val(), 1, 50);

        if (result != "true")
        {
            errorify($('#verifier_desg'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_desg'), "");
        }
    }
    if (document.getElementById('verifier_rank') != undefined) {
        result = validate_generic_alpha_sp($('#verifier_rank').val(), 1, 50);

        if (result != "true")
        {
            errorify($('#verifier_rank'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_rank'), "");
        }
    }
    if (document.getElementById('verifier_posting') != undefined) {
        result = validate_generic_alpha_sp($('#verifier_posting').val(), 1, 50);

        if (result != "true")
        {
            errorify($('#verifier_posting'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_posting'), "");
        }
    }
    if (document.getElementById('pov11') != undefined) {
        result = validate_generic_alpha_num_sp($('#pov11').val(), 1, 50);

        if (result != "true")
        {
            errorify_same($('#pov11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#pov11'), "");
        }
    }


    if (document.getElementById('pov_state_id11') != undefined) {
        result = validate_generic_alpha_num_sp($('#pov_state_id11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#pov_state_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#pov_state_id11'), "");
        }
    }

    for (var i = 2; i <= 8; i++) {
        if (document.getElementById('pov1' + i) != undefined && document.getElementById('pov1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#pov1' + i).val(), 1, 50);

            if (result != "true")
            {
                errorify_same($('#pov1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pov1' + i), "");
            }
        }
        if (document.getElementById('pov_state_id1' + i) != undefined && document.getElementById('pov_state_id1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#pov_state_id1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pov_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pov_state_id' + i), "");
            }
        }
    }

    //relative validationstarts
    if (document.getElementById('relative_name11') != undefined) {
        result = validate_generic_alpha_sp($('#relative_name11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_name11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_name11'), "");
        }
    }
    if (document.getElementById('relation11') != undefined) {
        result = validate_generic_alpha_sp($('#relation11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relation11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relation11'), "");
        }
    }
    if (document.getElementById('relative_address11') != undefined) {
        result = validate_generic_address($('#relative_address11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_address11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_address11'), "");
        }
    }
    if (document.getElementById('relative_place11') != undefined) {
        result = validate_generic_address($('#relative_place11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_place11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_place11'), "");
        }
    }
    if (document.getElementById('relative_state_id11') != undefined) {
        result = validate_generic_alpha_num_sp($('#relative_state_id11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_state_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_state_id11'), "");
        }
    }
    if (document.getElementById('relative_dist_id11') != undefined) {
        result = validate_generic_alpha_num_sp($('#relative_dist_id11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_dist_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_dist_id11'), "");
        }
    }
    if (document.getElementById('relative_pin_code11') != undefined) {
        result = validate_ind_pincode($('#relative_pin_code11').val(), 1);
        if (result != "true")
        {
            errorify_same($('#relative_pin_code11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_pin_code11'), "");
        }
    }
    if (document.getElementById('relative_phone11') != undefined) {
        result = validate_phone($('#relative_phone11').val(), 1);
        if (result != "true")
        {
            errorify_same($('#relative_phone11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_phone11'), "");
        }
    }

    for (var i = 2; i <= 8; i++) {

        if (document.getElementById('relative_name1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relative_name1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_name1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_name1' + i), "");
            }
        }
        if (document.getElementById('relation1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relation1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relation1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relation1' + i), "");
            }
        }
        if (document.getElementById('relative_address1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_address($('#relative_address1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_address1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_address1' + i), "");
            }
        }
        if (document.getElementById('relative_place1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_address($('#relative_place1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_place1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_place1' + i), "");
            }
        }
        if (document.getElementById('relative_state_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#relative_state_id1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_state_id1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_state_id1' + i), "");
            }
        }
        if (document.getElementById('relative_dist_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#relative_dist_id1' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_dist_id1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_dist_id1' + i), "");
            }
        }
        if (document.getElementById('relative_pin_code1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_ind_pincode($('#relative_pin_code1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_pin_code1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_pin_code1' + i), "");
            }
        }
        if (document.getElementById('relative_phone1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_phone($('#relative_phone1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_phone1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_phone1' + i), "");
            }
        }

    }

    for (var i = 1; i <= 8; i++) {

        if (document.getElementById('place_of_stay' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
        }
        if (document.getElementById('pos_address' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            result = validate_generic_address($('#pos_address' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_address' + i), "");
            }
        }
        if (document.getElementById('pos_state_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_state_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_state_id' + i), "");
            }
        }
        if (document.getElementById('pos_dist_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_dist_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_dist_id' + i), "");
            }
        }

        if (document.getElementById('pos_phone' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_phone($('#pos_phone' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_phone' + i), "");
            }
        }
    }

    if (document.getElementById('jkVisit1') != undefined) {
        if (document.getElementById('jkVisit1').checked == false && document.getElementById('jkVisit2').checked == false) {
            errorify($('#jkVisit1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#jkVisit1'), "");
        }

    }
    if (document.getElementById('jkParent1') != undefined) {
        if (document.getElementById('jkParent1').checked == false && document.getElementById('jkParent2').checked == false) {
            errorify($('#jkParent1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#jkParent1'), "");
        }
    }
    if (document.getElementById('mgt1') != undefined) {
        if (document.getElementById('mgt1').checked == false && document.getElementById('mgt2').checked == false) {
            errorify($('#mgt1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#mgt1'), "");
        }
    }
    if (document.getElementById('mgt1') != undefined && document.getElementById('mgtDate') != undefined) {
        if (document.getElementById('mgt1').checked == true) {
            if (document.getElementById('mgtDate') != undefined) {
                result = validate_migrationDate($('#mgtDate').val(), 1);
                if (result != "true")
                {
                    errorify($('#mgtDate'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#mgtDate'), "In (DD/MM/YYYY) format");
                }
            }
            //mgtDetails
            if (document.getElementById('mgtDetails') != undefined) {
                result = validate_generic_alpha_sp($('#mgtDetails').val(), 1, 50);
                if (result != "true")
                {
                    errorify($('#mgtDetails'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#mgtDetails'), "");
                }
            }
        }
    }




    return submit;

}

function validate_pak_visit_form_exit() {
    //
    var submit = true;
    var result = "";
    if (document.getElementById('verifier_name') != undefined) {
        result = validate_generic_alpha_sp($('#verifier_name').val(), 1, 75);

        if (result != "true")
        {
            errorify($('#verifier_name'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_name'), "");
        }
    }
    if (document.getElementById('verifier_phone') != undefined) {
        result = validate_phone($('#verifier_phone').val(), 0);

        if (result != "true")
        {
            errorify($('#verifier_phone'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_phone'), "");
        }
    }
    if (document.getElementById('verifier_org') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_org').val(), 0, 50);

        if (result != "true")
        {
            errorify($('#verifier_org'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_org'), "");
        }
    }
    if (document.getElementById('verifier_desg') != undefined) {
        result = validate_generic_alpha_sp($('#verifier_desg').val(), 0, 50);

        if (result != "true")
        {
            errorify($('#verifier_desg'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_desg'), "");
        }
    }
    if (document.getElementById('verifier_rank') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_rank').val(), 0, 50);

        if (result != "true")
        {
            errorify($('#verifier_rank'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_rank'), "");
        }
    }
    if (document.getElementById('verifier_posting') != undefined) {
        result = validate_generic_alpha_num_sp($('#verifier_posting').val(), 0, 50);

        if (result != "true")
        {
            errorify($('#verifier_posting'), result);
            submit = false;
        }
        else
        {
            correctify($('#verifier_posting'), "");
        }
    }
    if (document.getElementById('pov11') != undefined) {
        result = validate_generic_alpha_num_sp($('#pov11').val(), 1, 50);

        if (result != "true")
        {
            errorify_same($('#pov11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#pov11'), "");
        }
    }


    if (document.getElementById('pov_state_id11') != undefined) {
        result = validate_generic_alpha_num_sp($('#pov_state_id11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#pov_state_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#pov_state_id11'), "");
        }
    }

    for (var i = 2; i <= 8; i++) {
        if (document.getElementById('pov1' + i) != undefined && document.getElementById('pov1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#pov1' + i).val(), 0, 50);

            if (result != "true")
            {
                errorify_same($('#pov1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pov1' + i), "");
            }
        }
        if (document.getElementById('pov_state_id1' + i) != undefined && document.getElementById('pov_state_id1' + i).style.display == 'block') {
            result = validate_generic_alpha_num_sp($('#pov_state_id1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#pov_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pov_state_id' + i), "");
            }
        }
    }

    //relative validationstarts
    if (document.getElementById('relative_name11') != undefined) {
        result = validate_generic_alpha_sp($('#relative_name11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relative_name11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_name11'), "");
        }
    }
    if (document.getElementById('relation11') != undefined) {
        result = validate_generic_alpha_sp($('#relation11').val(), 1, 50);
        if (result != "true")
        {
            errorify_same($('#relation11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relation11'), "");
        }
    }
    if (document.getElementById('relative_address11') != undefined) {
        result = validate_generic_address($('#relative_address11').val(), 0, 50);
        if (result != "true")
        {
            errorify_same($('#relative_address11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_address11'), "");
        }
    }
    if (document.getElementById('relative_place11') != undefined) {
        result = validate_generic_address($('#relative_place11').val(), 0, 50);
        if (result != "true")
        {
            errorify_same($('#relative_place11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_place11'), "");
        }
    }
    if (document.getElementById('relative_state_id11') != undefined) {
        result = validate_generic_alpha_sp($('#relative_state_id11').val(), 0, 50);
        if (result != "true")
        {
            errorify_same($('#relative_state_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_state_id11'), "");
        }
    }
    if (document.getElementById('relative_dist_id11') != undefined) {
        result = validate_generic_alpha_sp($('#relative_dist_id11').val(), 0, 50);
        if (result != "true")
        {
            errorify_same($('#relative_dist_id11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_dist_id11'), "");
        }
    }
    if (document.getElementById('relative_pin_code11') != undefined) {
        result = validate_ind_pincode($('#relative_pin_code11').val(), 0);
        if (result != "true")
        {
            errorify_same($('#relative_pin_code11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_pin_code11'), "");
        }
    }
    if (document.getElementById('relative_phone11') != undefined) {
        result = validate_phone($('#relative_phone11').val(), 0);
        if (result != "true")
        {
            errorify_same($('#relative_phone11'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#relative_phone11'), "");
        }
    }

    for (var i = 2; i <= 8; i++) {

        if (document.getElementById('relative_name1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relative_name1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relative_name1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_name1' + i), "");
            }
        }
        if (document.getElementById('relation1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relation1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relation1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relation1' + i), "");
            }
        }
        if (document.getElementById('relative_address1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_address($('#relative_address1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relative_address1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_address1' + i), "");
            }
        }
        if (document.getElementById('relative_place1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_address($('#relative_place1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relative_place1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_place1' + i), "");
            }
        }
        if (document.getElementById('relative_state_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relative_state_id1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relative_state_id1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_state_id1' + i), "");
            }
        }
        if (document.getElementById('relative_dist_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_generic_alpha_sp($('#relative_dist_id1' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#relative_dist_id1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_dist_id1' + i), "");
            }
        }
        if (document.getElementById('relative_pin_code1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_ind_pincode($('#relative_pin_code1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_pin_code1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_pin_code1' + i), "");
            }
        }
        if (document.getElementById('relative_phone1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            result = validate_phone($('#relative_phone1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_phone1' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#relative_phone1' + i), "");
            }
        }

    }

    for (var i = 1; i <= 8; i++) {

        if (document.getElementById('place_of_stay' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            if (i == 1) {
                result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 1, 50);
            }
            else {
                result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 0, 50);
            }
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
        }
        if (document.getElementById('pos_address' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            result = validate_generic_address($('#pos_address' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_address' + i), "");
            }
        }
        if (document.getElementById('pos_state_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_sp($('#pos_state_id' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_state_id' + i), "");
            }
        }
        if (document.getElementById('pos_dist_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_sp($('#pos_dist_id' + i).val(), 0, 50);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_dist_id' + i), "");
            }
        }

        if (document.getElementById('pos_phone' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_phone($('#pos_phone' + i).val(), 0);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_phone' + i), "");
            }
        }
    }

    if (document.getElementById('jkVisit1') != undefined) {
        if (document.getElementById('jkVisit1').checked == false && document.getElementById('jkVisit2').checked == false) {
            errorify($('#jkVisit1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#jkVisit1'), "");
        }

    }
    if (document.getElementById('jkParent1') != undefined) {
        if (document.getElementById('jkParent1').checked == false && document.getElementById('jkParent2').checked == false) {
            errorify($('#jkParent1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#jkParent1'), "");
        }
    }
    if (document.getElementById('mgt1') != undefined) {
        if (document.getElementById('mgt1').checked == false && document.getElementById('mgt2').checked == false) {
            errorify($('#mgt1'), "Please select yes or no");
            submit = false;
        } else {
            correctify($('#mgt1'), "");
        }
    }
    if (document.getElementById('mgt1') != undefined && document.getElementById('mgtDate') != undefined) {
        if (document.getElementById('mgt1').checked == true) {
            if (document.getElementById('mgtDate') != undefined) {
                result = validate_migrationDate($('#mgtDate').val(), 0);
                if (result != "true")
                {
                    errorify($('#mgtDate'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#mgtDate'), result);
                }
            }
            //mgtDetails
            if (document.getElementById('mgtDetails') != undefined) {
                result = validate_generic_alpha_sp($('#mgtDetails').val(), 0, 50);
                if (result != "true")
                {
                    errorify($('#mgtDetails'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#mgtDetails'), "");
                }
            }
        }
    }




    return submit;

}

function validate_pak_visit_form() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "save and continue") {
        return validate_pak_visit_form_continue();
    } else {
        return validate_pak_visit_form_exit();
    }
    return false;
}

function validate_ban_visit_form_continue() {
    //
    var submit = true;
    var result = "";

    for (var i = 1; i <= 4; i++) {

        if (document.getElementById('place_of_stay' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            // alert("i = "+i+" and $('#place_of_stay' + i).val() = "+$('#place_of_stay' + i).val()+"solengt = "+$('#place_of_stay' + i).val().length);
            result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
        }
        if (document.getElementById('pos_address' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            result = validate_generic_address($('#pos_address' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_address' + i), "");
            }
        }
        if (document.getElementById('pos_state_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_state_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_state_id' + i), "");
            }
        }
        if (document.getElementById('pos_dist_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_dist_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_dist_id' + i), "");
            }
        }

        if (document.getElementById('pos_email' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_email($('#pos_email' + i).val(), 0);
            if (result != "true")
            {
                errorify_same($('#pos_email' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_phone' + i), "");
            }
        }

        if (document.getElementById('pos_phone' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_phone($('#pos_phone' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_phone' + i), "");
            }
        }
    }
    return submit;

}


function validate_ban_visit_form_exit() {
    //
    var submit = true;
    var result = "";

    for (var i = 1; i <= 4; i++) {

        if (document.getElementById('place_of_stay' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            if (i == 1) {
                result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 1, 50);
            }
            else {
                result = validate_generic_alpha_sp($('#place_of_stay' + i).val(), 0, 50);
            }
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
        }
        if (document.getElementById('pos_address' + i) != undefined && document.getElementById('A' + i).style.display != 'none') {
            if (i == 1) {
                result = validate_generic_address($('#pos_address' + i).val(), 1, 50);
            }
            else {
                result = validate_generic_address($('#pos_address' + i).val(), 0, 50);
            }


            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_address' + i), "");
            }
        }
        if (document.getElementById('pos_state_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_state_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_state_id' + i), "");
            }
        }
        if (document.getElementById('pos_dist_id' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_generic_alpha_num_sp($('#pos_dist_id' + i).val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_dist_id' + i), "");
            }
        }

        if (document.getElementById('pos_phone' + i) != undefined && document.getElementById('A' + i).style.display != "none") {
            result = validate_phone($('#pos_phone' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                submit = false;
            }
            else
            {
                correctify_same($('#pos_phone' + i), "");
            }
        }
    }
    return submit;

}


function validate_ban_visit_form() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "save and continue") {
        return validate_ban_visit_form_continue();
    } else {
        return validate_ban_visit_form_exit();
    }
    return false;
}





function validate_image_upload() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "upload") {
        var myfile = $('#image_error_id').val();
        var mysplit = myfile.split('.');
        var len = mysplit.length;
        var ext = mysplit[len - 1];
        //alert("File Size = "+myfile.size);
        ext = ext.toLowerCase();
        if (ext == 'jpg' || ext == 'jpeg')
        {
            //return true;
            correctify_image($('#image_error_id'), "");
            $('#continue').removeAttr('disabled');
            $('#skip_and_continue').removeAttr('disabled');
        }
        else
        {
            errorify_image($('#image_error_id'), "Only JPG files can be uploaded. Please try again.");
            $('#image_error_id').val('');
            return false;
        }
    } else {
    //return validate_basic_details_temp_exit();
    }
    return true;
}


function validate_reprint_form() {
    var submit = true;
    var result = "";
    var missioncode_filerfno = "";
    var fileno = "";
    if (document.getElementById('visa_type1') != undefined) {

        if (document.getElementById('visa_type1').checked == false && document.getElementById('visa_type2').checked == false) {
            errorify($('#visa_type1'), "Please select regular visa or e-Visa");
            submit = false;
        } else {
            correctify($('#visa_type1'), "");
        }
    }

    if (document.getElementById('missioncode_id_reprint') != undefined) {
        if (document.getElementById('visa_type2').checked == true) {
            result = validate_missionCode_reprint($('#missioncode_id_reprint').val(), 1);
            if (result != "true")
            {
                errorify($('#missioncode_id_reprint'), result);
                submit = false;
            }
            else
            {
                correctify($('#missioncode_id_reprint'), "Select mission");
            }
        }
    }

    if (document.getElementById('port_id') != undefined) {
        if (document.getElementById('visa_type1').checked == true) {
            result = validate_missionCode_reprint($('#port_id').val(), 1);
            if (result != "true")
            {
                errorify($('#port_id'), result);
                submit = false;
            }
            else
            {
                correctify($('#port_id'), "Select port of arrival");
            }
        }
    }

    if (document.getElementById('application_id') != undefined) {

        result = validate_filenumber($('#application_id').val(), 1);
        if (result != "true")
        {
            errorify($('#application_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#application_id'), "Please enter application id");
        }

    }


    if (document.getElementById('dob_id') != undefined) {
        $('#dob_id').val(changeDate($('#dob_id').val()));
        result = validate_dob($('#dob_id').val().trim(), 1);
        if (result != "true")
        {
            errorify($('#dob_id'), result);
            submit = false;
        }
        else {
            correctify($('#dob_id'), "Please enter Date of Birth in DD/MM/YYYY format");
        }
    }

    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 1);
        if (result != "true")
        {
            errorify($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#passport_no'), "Please enter Passport Number");
        }

    }

    //    var val_clicked = $("input[type=submit][clicked=true]").val();
    //    val_clicked = val_clicked.toLowerCase();
    //    if (val_clicked == "get appointment") {
    //        if (validate_appointment_mission($('#missioncode_id_reprint').val()) == true) {
    //            $("#reprint_form_id").attr("action", "Allotment");
    //        }
    //    }

    if (document.getElementById('captcha') != undefined) {
        result = validate_captcha($('#captcha').val(), 1);

        if (result != "true")
        {
            errorify($('#captcha'), result);
            submit = false;
        }
        else
        {
            correctify_lowercase($('#captcha'), "");
        }
    }

    if (document.getElementById('visa_type1').checked == true)
    {
        fileno = document.getElementById('application_id').value;
        missioncode_filerfno = fileno.substring(0, 4);
        result = varify_mission($('#port_id').val(), missioncode_filerfno);
        if (result != "true")
        {
            errorify($('#port_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#port_id'), "");
        }

    }
    else if (document.getElementById('visa_type2').checked == true)
    {
        fileno = document.getElementById('application_id').value;
        missioncode_filerfno = fileno.substring(0, 4);
        result = varify_mission($('#missioncode_id_reprint').val(), missioncode_filerfno);
        if (result != "true")
        {
            errorify($('#missioncode_id_reprint'), result);
            submit = false;
        }
        else
        {
            correctify($('#missioncode_id_reprint'), "");
        }
    }


    //alert(submit);
    return submit;

}

function validate_payment_success() {

    var submit = true;
    var result = "";
    if (document.getElementById('filerfno') != undefined) {
        result = validate_filenumber($('#filerfno').val(), 1);
        if (result != "true")
        {
            errorify_same($('#filerfno'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#filerfno'), "");
        }
    }
    if (document.getElementById('ivrkey') != undefined) {
        result = validate_ivrkey($('#ivrkey').val(), 1);
        if (result != "true")
        {
            errorify_same($('#ivrkey'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#ivrkey'), "");
        }
    }

    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 1);
        if (result != "true")
        {
            errorify_same($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#passport_no'), "");
        }

    }

    return submit;

}

function validate_paycheck_form() {

    var submit = true;
    var result = "";
    if (document.getElementById('application_id') != undefined) {
        result = validate_filenumber($('#application_id').val(), 1);
        if (result != "true")
        {
            errorify($('#application_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#application_id'), "");
        }
    }
    if (document.getElementById('dob_id') != undefined) {
        $('#dob_id').val(changeDate($('#dob_id').val()));
        result = validate_dob($('#dob_id').val().trim(), 1);
        if (result != "true")
        {
            errorify($('#dob_id'), result);
            submit = false;
        }
        else {
            correctify($('#dob_id'), "Date of Birth as in Passport in DD/MM/YYYY format");
        }
    }

    return submit;
}

function validate_status_enq_form() {
    var submit = true;
    var result = "";

    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();

    if (val_clicked == "advanced search for e-visa only") {
        return submit;
    }
    if (document.getElementById('application_id') != undefined) {
        result = validate_filenumber($('#application_id').val(), 1);

        if (result != "true")
        {
            errorify($('#application_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#application_id'), "");
        }
    }
    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 1);

        if (result != "true")
        {
            errorify_same($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#passport_no'), "");
        }
    }
    return submit;
}

function validate_adv_status_enq_form() {
    var submit = true;
    var result = "";

    if (document.getElementById('passport_no') != undefined) {
        result = validate_passportNo($('#passport_no').val(), 1);
        if (result != "true")
        {
            errorify_same($('#passport_no'), result);
            submit = false;
        }
        else
        {
            correctify_same($('#passport_no'), "");
        }
    }
    if (document.getElementById('dob_id') != undefined) {
        $('#dob_id').val(changeDate($('#dob_id').val()));
        result = validate_dob($('#dob_id').val().trim(), 1);
        if (result != "true")
        {
            errorify($('#dob_id'), result);
            submit = false;
        }
        else {
            correctify($('#dob_id'), "Date of Birth as in Passport in DD/MM/YYYY format");
        }
    }
    if (document.getElementById('nationality_id') != undefined) {
        result = validate_Nationality($('#nationality_id').val(), 1);
        if (result != "true")
        {
            errorify($('#nationality_id'), result);
            submit = false;
        }
        else
        {
            correctify($('#nationality_id'), "Please select your nationality");
        }
    }
    return submit;
}

function validate_partialFilledForm() {
    var submit = true;
    var result = "";
    if (document.getElementById('tempFileNo') != undefined) {
        result = validate_temp_filenumber($('#tempFileNo').val(), 1);

        if (result != "true")
        {
            errorify($('#tempFileNo'), result);
            submit = false;
        }
        else
        {
            correctify($('#tempFileNo'), "");
        }
    }

    if (document.getElementById('captcha') != undefined) {
        result = validate_captcha($('#captcha').val(), 1);

        if (result != "true")
        {
            errorify($('#captcha'), result);
            submit = false;
        }
        else
        {
            correctify_lowercase($('#captcha'), "");
        }
    }
    return submit;
}


function validate_reuploadLogin_form() {
    var submit = true;
    var result = "";

    if (document.getElementById('reupload_filerfno') != undefined) {
        result = validate_filenumber($('#reupload_filerfno').val(), 1);
        if (result != "true")
        {
            errorify($('#reupload_filerfno'), result);
            submit = false;
        }
        else
        {
            correctify($('#reupload_filerfno'), "Please enter application id");
        }
    }
    if (document.getElementById('reupload_passport_no') != undefined) {
        result = validate_passportNo($('#reupload_passport_no').val(), 1);
        if (result != "true")
        {
            errorify($('#reupload_passport_no'), result);
            submit = false;
        }
        else
        {
            correctify($('#reupload_passport_no'), "");
        }
    }
    if (document.getElementById('captcha') != undefined) {
        result = validate_captcha($('#captcha').val(), 1);

        if (result != "true")
        {
            errorify($('#captcha'), result);
            submit = false;
        }
        else
        {
            correctify_lowercase($('#captcha'), "");
        }
    }
    return submit;
}

function validate_image_reupload() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "upload") {
        var myfile = $('#reimage_error_id').val();
        var mysplit = myfile.split('.');
        var len = mysplit.length;
        var ext = mysplit[len - 1];
        ext = ext.toLowerCase();
        if (ext == 'jpg' || ext == 'jpeg')
        {
            correctify_image($('#reimage_error_id'), "");
            $('#continue').removeAttr('disabled');
        }
        else
        {
            errorify($('#reimage_error_id'), "Only JPG files can be uploaded. Please try again.");
            $('#reimage_error_id').val('');
            return false;
        }
    } else {
    //return validate_basic_details_temp_exit();
    }
    if (myfile.size > 1000000) {//1445260
        errorify($('#reimage_error_id'), "Image size exceeds 1MB.Please upload Image smaller than 1MB.");
        $('#continue').attr('disabled', 'disabled');
        return false;

    } else if (myfile.size < 10000) {
        errorify($('#reimage_error_id'), "Image size must be greater than 10KB");
        $('#continue').attr('disabled', 'disabled');
        return false;

    }
    else {
        correctify_image($('#reimage_error_id'), "");
        $('#continue').removeAttr('disabled');
    }
    return true;
}

function validate_document_reupload() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "upload document") {
        if (document.getElementById("verifyDoc").checked == false) {
            document.getElementById("verifyDoc").focus();
            alert("Please click the checkbox to continue.");
            return false;
        }
        var myfile = $('#redoc_error_id').val();
        var mysplit = myfile.split('.');
        var len = mysplit.length;
        var ext = mysplit[len - 1];
        ext = ext.toLowerCase();
        if (ext == 'pdf' || ext == 'PDF')
        {
            //return true;
            correctify_image($('#redoc_error_id'), "");
            $('#continue').removeAttr('disabled');
        }
        else
        {
            errorify($('#redoc_error_id'), "Only PDF files can be uploaded. Please try again.");
            $('#doc_error_id').val('');
            return false;
        }
    } else {
    //return validate_basic_details_temp_exit();
    }
    if (myfile.size > 300000) {
        errorify($('#redoc_error_id'), "Document size exceeds 300KB.Please upload file smaller than 300KB.");
        $('#continue').attr('disabled', 'disabled');

    } else if (myfile.size < 10000) {
        errorify($('#redoc_error_id'), "Document size must be greater than 10KB");
        $('#continue').attr('disabled', 'disabled');

    }
    else {
        correctify_image($('#redoc_error_id'), "");
        $('#continue').removeAttr('disabled');

    }

    return true;
}

function validate_verification_details_form() {
    var val_clicked = $("input[type=submit][clicked=true]").val();
    val_clicked = val_clicked.toLowerCase();
    if (val_clicked == "verified and continue") {
        var txt = "The applicant is requested to verify the particulars filled in the application Form. \n The applicant may face legal action(including refusal to enter India or deportation) in case of provision of wrong information. \nPress 'OK' to Proceed for Final registration  OR  'Cancel' to modify details";
        var r = confirm(txt);
        if (r == true) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}
