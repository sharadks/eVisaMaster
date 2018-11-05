$(document).ready(function() {
    $("form input[type=submit]").click(function() {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true");
    });
    ////////

    if ($('#countryname_id') != undefined) {
        $('#countryname_id').blur(function() {
            var result = validate_Country($('#countryname_id').val(), 1);
            if (result != "true")
            {
                errorify($('#countryname_id'), result);
            }
            else
            {
                correctify($('#countryname_id'), "");
            }
        });
    }

    if ($('#missioncode_id') != undefined) {
        $('#missioncode_id').blur(function() {
            var result = validate_missionCode($('#missioncode_id').val(), 1);
            if (result != "true")
            {
                errorify($('#missioncode_id'), result);
            }
            else
            {
                correctify($('#missioncode_id'), "");
            }
        });
    }
    if ($('#nationality_id') != undefined) {
        $('#nationality_id').blur(function() {
            var result = validate_Nationality($('#nationality_id').val(), 1);
            if (result != "true")
            {
                errorify($('#nationality_id'), result);
            }
            else
            {
                correctify($('#nationality_id'), "");
            }
        });
    }
    if ($('#email_id') != undefined) {
        $('#email_id').blur(function() {
            var visa_type_id = $('#visa_type_id').val();
            var result = validate_email($('#email_id').val(), 1, visa_type_id);
            if (result != "true")
            {
                errorify($('#email_id'), result);
            }
            else
            {
                correctify($('#email_id'), "");
            }
        });
    }

    if ($('#email_re_id') != undefined) {
        $('#email_re_id').blur(function() {
            var visa_type_id = $('#visa_type_id').val();
            var result = validate_email($('#email_re_id').val(), 1, visa_type_id);
            if (result != "true")
            {
                errorify($('#email_re_id'), result);
            }
            else if ($('#email_id').val().toLowerCase() != $('#email_re_id').val().toLowerCase()) {
                result = "Email ids do not match.";
                errorify($('#email_re_id'), result);
            }
            else
            {
                correctify($('#email_re_id'), "");
            }
        });
    }


    if ($('#ppt_type_id') != undefined) {
        $('#ppt_type_id').blur(function() {
            var result = validate_ppt_type_id($('#ppt_type_id').val(), 1);
            if (result != "true")
            {
                errorify($('#ppt_type_id'), result);
            }
            else
            {
                correctify($('#ppt_type_id'), "");
            }
        });
    }


    if ($('#visaService') != undefined) {
        $('#visaService').blur(function() {
            var result = validate_visa_service($('#visaService').val(), 1);
            if (result != "true")
            {
                errorify($('#visaService'), result);
            }
            else
            {
                correctify($('#visaService'), "");
            }
        });
    }
    if ($('#captcha') != undefined) {
        $('#captcha').blur(function() {
            var result = validate_captcha($('#captcha').val(), 1);
            if (result != "true")
            {
                errorify($('#captcha'), result);
            }
            else
            {
                correctify_lowercase($('#captcha'), "");
            }
        });
    }



///////////////////////Basic Details Form /////////////////////////////

    if ($('#surname') != undefined) {
        $('#surname').blur(function() {
            var result = validate_surname($('#surname').val(), 0);
            if (result != "true")
            {
                errorify($('#surname'), result);
                $('#surname').parent().next().css('color', 'red');
            }
            else
            {
                correctify($('#surname'), "Surname/Family Name (exactly as in Passport)");
                $('#surname').parent().next().css('color', '#A30B18');
            }
        });
    }
    if (document.getElementById('givenName') != undefined) {
        $('#givenName').blur(function() {
            var result = validate_givenName($('#givenName').val(), 1);
            if (result != "true")
            {
                errorify($('#givenName'), result);
                $('#givenName').parent().next().css('color', 'red');
            }
            else
            {
                correctify($('#givenName'), "Given Name/s (exactly as in Passport)");
                $('#givenName').parent().next().css('color', '#A30B18');
            }
        });
    }
    if (document.getElementById('prev_surname') != undefined) {
        $('#prev_surname').blur(function() {
            if (document.getElementById('changedSurnameCheck').checked == true) {
                var result = validate_surname($('#prev_surname').val(), 1);
                if (result != "true")
                {
                    errorify($('#prev_surname'), result);
                }
                else
                {
                    correctify($('#prev_surname'), "");
                }
            }

        });
    }
    if (document.getElementById('prev_given_name') != undefined) {
        $('#prev_given_name').blur(function() {
            if (document.getElementById('changedSurnameCheck').checked == true) {
                var result = validate_givenName($('#prev_given_name').val(), 1);
                if (result != "true")
                {
                    errorify($('#prev_given_name'), result);
                }
                else
                {
                    correctify($('#prev_given_name'), "Previous Surname");
                }
            }
        });
    }
    if (document.getElementById('gender') != undefined) {
        $('#gender').blur(function() {
            var result = validate_Gender($('#gender').val(), 1);
            if (result != "true")
            {
                errorify($('#gender'), result);
            }
            else
            {
                correctify($('#gender'), "Gender");
            }
        });
    }

    if (document.getElementById('birth_place') != undefined) {
        $('#birth_place').blur(function() {
            var result = validate_placeOfBirth($('#birth_place').val(), 1);
            if (result != "true")
            {
                errorify($('#birth_place'), result);
            }
            else
            {
                correctify($('#birth_place'), "Province/Town/City of birth");
            }
        });
    }
    if (document.getElementById('country_birth') != undefined) {
        $('#country_birth').blur(function() {
            var result = validate_Country_of_birth($('#country_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#country_birth'), result);
            }
            else
            {
                correctify($('#country_birth'), "Country of birth");
            }
        });
    }

    if (document.getElementById('nic_number') != undefined) {
        $('#nic_number').blur(function() {
            var result = validate_nic_no($('#nic_number').val(), 1);
            if (result != "true")
            {
                errorify($('#nic_number'), result);
            }
            else
            {
                correctify($('#nic_number'), "If not applicable Please Type NA");
            }
        });
    }
    if (document.getElementById('religion') != undefined) {
        $('#religion').blur(function() {
            var result = validate_religion($('#religion').val(), 1);
            if (result != "true")
            {
                errorify($('#religion'), result);
            }
            else
            {
                correctify($('#religion'), "If Others .Please specify");
            }
        });
    }
    if (document.getElementById('religion_other') != undefined) {
        $('#religion_other').blur(function() {
            var result = validate_religion($('#religion_other').val(), 0);
            if (result != "true")
            {
                errorify($('#religion_other'), result);
            }
            else
            {
                correctify($('#religion_other'), "");
            }
        });
    }
    if (document.getElementById('identity_marks') != undefined) {
        $('#identity_marks').blur(function() {
            var result = validate_VisibleMark($('#identity_marks').val(), 1);
            if (result != "true")
            {
                errorify($('#identity_marks'), result);
            }
            else
            {
                correctify($('#identity_marks'), "Visible identification marks");
            }
        });
    }
    if (document.getElementById('education') != undefined) {
        $('#education').blur(function() {
            var result = validate_Education($('#education').val(), 1);
            if (result != "true")
            {
                errorify($('#education'), result);
            }
            else
            {
                correctify($('#education'), "Educational Qualification");
            }
        });
    }

    if (document.getElementById('nationality_by') != undefined) {
        $('#nationality_by').blur(function() {
            var result = validate_nationality_Acquisition($('#nationality_by').val(), 1);
            if (result != "true")
            {
                errorify($('#nationality_by'), result);
            }
            else
            {
                correctify($('#nationality_by'), "Did you acquire Nationality by birth or by naturalization?");
            }
        });
    }

    if (document.getElementById('prev_nationality') != undefined) {
        $('#prev_nationality').blur(function() {
            if ($('#prev_nationality').val() == "By Birth") {
                var result = validate_Nationality($('#prev_nationality').val(), 1);
                if (result != "true")
                {
                    errorify($('#prev_nationality'), result);
                }
                else
                {
                    correctify($('#prev_nationality'), "Specify Previous Nationality");
                }
            }

        });
    }

    if (document.getElementById('refer_flag1') != undefined) {
        $('#refer_flag1').blur(function() {
            if (document.getElementById('refer_flag1').checked == false && document.getElementById('refer_flag2').checked == false) {
                errorify($('#refer_flag1'), "Please select yes or no");
            } else {
                correctify($('#refer_flag1'), "");
                correctify($('#refer_flag2'), "");
            }

        });
    }

    if (document.getElementById('passport_no') != undefined) {
        $('#passport_no').blur(function() {
            var result = validate_passportNo($('#passport_no').val(), 1);
            if (result != "true")
            {
                errorify($('#passport_no'), result);
            }
            else
            {
                correctify($('#passport_no'), "");
            }
        });
    }

    if (document.getElementById('passport_issue_place') != undefined) {
        $('#passport_issue_place').blur(function() {
            var result = validate_passportISsuePlace($('#passport_issue_place').val(), 1);
            if (result != "true")
            {
                errorify($('#passport_issue_place'), result);
            }
            else
            {
                correctify($('#passport_issue_place'), "Place of Issue");
            }
        });
    }

    if (document.getElementById('passport_issue_date') != undefined) {
        $('#passport_issue_date').blur(function() {
            $('#passport_issue_date').val(changeDate($('#passport_issue_date').val()));
            var result = validate_passportDateIssue($('#passport_issue_date').val(), 1);
            if (result != "true")
            {
                errorify($('#passport_issue_date'), result);
            }
            else
            {
                correctify($('#passport_issue_date'), "In DD/MM/YYYY format");
            }
        });
    }

    if (document.getElementById('passport_expiry_date') != undefined) {
        $('#passport_expiry_date').blur(function() {
            $('#passport_expiry_date').val(changeDate($('#passport_expiry_date').val()));
            var visa_type_id = $('#visa_type_id').val();
            var passport_expiry_date_var = $('#passport_expiry_date').val();
            var journey_date_var = $('#journey_date').val();
            passport_expiry_date_var = passport_expiry_date_var.replace(/^\s+|\s+$/gm, '');//trim
            journey_date_var = journey_date_var.replace(/^\s+|\s+$/gm, '');//trim
            var result = validate_passport_Expiry_Date(passport_expiry_date_var, journey_date_var, visa_type_id, 1);
            //var result = validate_passportExpiryDate($('#passport_expiry_date').val(), 1);
            if (result != "true")
            {
                errorify($('#passport_expiry_date'), result);
            }
            else
            {
                correctify($('#passport_expiry_date'), "In DD/MM/YYYY format");
            }
        });
    }



    if (document.getElementById('booklet_no') != undefined) {
        $('#booklet_no').blur(function() {
            var result = validate_Booklet_no($('#booklet_no').val(), 1);
            if (result != "true")
            {
                errorify($('#booklet_no'), result);
            }
            else
            {
                correctify($('#booklet_no'), "Booklet Number");
            }
        });
    }

    if (document.getElementById('track_no') != undefined) {
        $('#track_no').blur(function() {
            var result = validate_track_no($('#track_no').val(), 1);
            if (result != "true")
            {
                errorify($('#track_no'), result);
            }
            else
            {
                correctify($('#track_no'), "Tracking Number");
            }
        });
    }

    if (document.getElementById('previous_passport_no') != undefined) {
        $('#previous_passport_no').blur(function() {
            var result = validate_passportNo($('#previous_passport_no').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_passport_no'), result);
            }
            else
            {
                correctify($('#previous_passport_no'), "Previous Passport Number");
            }
        });
    }


    if (document.getElementById('other_ppt_1') != undefined) {
        $('#other_ppt_1').blur(function() {
            if (document.getElementById('other_ppt_1').checked == false && document.getElementById('other_ppt_2').checked == false) {
                errorify($('#other_ppt_1'), "Please select yes or no");
            } else {
                correctify($('#other_ppt_1'), "");
                correctify($('#other_ppt_1'), "");
            }

        });
    }

    if (document.getElementById('other_ppt_country_issue') != undefined) {
        $('#other_ppt_country_issue').blur(function() {
            if (document.getElementById('other_ppt_1').checked == true) {
                var result = validate_other_passport_issue_country($('#other_ppt_country_issue').val(), 1);
                if (result != "true")
                {
                    errorify($('#other_ppt_country_issue'), result);
                }
                else
                {
                    correctify($('#other_ppt_country_issue'), "Country of Issue");
                }
            }
        });
    }


    if (document.getElementById('other_ppt_no') != undefined) {
        $('#other_ppt_no').blur(function() {
            if (document.getElementById('other_ppt_1').checked == true) {
                var result = validate_passportNo($('#other_ppt_no').val(), 1);
                if (result != "true")
                {
                    errorify($('#other_ppt_no'), result);
                }
                else
                {
                    correctify($('#other_ppt_no'), "Passport No");
                }
            }
        });
    }

    if (document.getElementById('other_ppt_issue_date') != undefined) {
        $('#other_ppt_issue_date').blur(function() {
            if (document.getElementById('other_ppt_1').checked == true) {
                $('#other_ppt_issue_date').val(changeDate($('#other_ppt_issue_date').val()));
                var result = validate_passportIssueDate($('#other_ppt_issue_date').val(), 1);
                if (result != "true")
                {
                    errorify($('#other_ppt_issue_date'), result);
                }
                else
                {
                    correctify($('#other_ppt_issue_date'), "In DD/MM/YYYY format");
                }
            }
        });
    }

    if (document.getElementById('other_ppt_issue_place') != undefined) {
        $('#other_ppt_issue_place').blur(function() {
            if (document.getElementById('other_ppt_1').checked == true) {

                var result = validate_passportISsuePlace($('#other_ppt_issue_place').val(), 1);
                if (result != "true")
                {
                    errorify($('#other_ppt_issue_place'), result);
                }
                else
                {
                    correctify($('#other_ppt_issue_place'), "Place of Issue");
                }
            }
        });
    }

    if (document.getElementById('other_ppt_nat') != undefined) {
        $('#other_ppt_nat').blur(function() {
            if (document.getElementById('other_ppt_1').checked == true) {
                var result = validate_other_passport_issue_country($('#other_ppt_nat').val(), 1);
                if (result != "true")
                {
                    errorify($('#other_ppt_nat'), result);
                }
                else
                {
                    correctify($('#other_ppt_nat'), "Nationality described therein");
                }
            }
        });
    }

//other_ppt_issue_place


///FAMILY DETAILS FORM/.///////


    if (document.getElementById('pres_add1') != undefined) {
        $('#pres_add1').blur(function() {

            var result = validate_presAdd1($('#pres_add1').val(), 1);
            if (result != "true")
            {
                errorify($('#pres_add1'), result);
            }
            else
            {
                correctify($('#pres_add1'), "Applicant's Present Address. Maximum 35 characters (Each Line)");
            }
        });
    }

    if (document.getElementById('pres_add2') != undefined) {
        $('#pres_add2').blur(function() {
            var result = validate_presAdd2($('#pres_add2').val(), 1);
            if (result != "true")
            {
                errorify($('#pres_add2'), result);
            }
            else
            {
                correctify($('#pres_add2'), "Village/Town/City");
            }
        });
    }

    if (document.getElementById('pres_add3') != undefined) {
        $('#pres_add3').blur(function() {
            var result = validate_presAdd1($('#pres_add3').val(), 1);
            if (result != "true")
            {
                errorify($('#pres_add3'), result);
            }
            else
            {
                correctify($('#pres_add3'), "State/Province/District");
            }
        });
    }
    if (document.getElementById('province_name') != undefined) {
        $('#province_name').blur(function() {
            var result = validate_presAdd3($('#province_name').val(), 1);
            if (result != "true")
            {
                errorify($('#province_name'), result);
            }
            else
            {
                correctify($('#province_name'), "State/Province/District");
            }
        });
    }
    if (document.getElementById('pincode') != undefined) {
        $('#pincode').blur(function() {

            var result = validate_pincode($('#pincode').val(), 1);
            if (result != "true")
            {
                errorify($('#pincode'), result);
            }
            else
            {
                correctify($('#pincode'), "Postal/Zip Code");
            }
        });
    }
    if (document.getElementById('pres_country') != undefined) {
        $('#pres_country').blur(function() {
            var result = validate_Country($('#pres_country').val(), 1);
            if (result != "true")
            {
                errorify($('#pres_country'), result);
            }
            else
            {
                correctify($('#pres_country'), "Country");
            }
        });
    }

    if (document.getElementById('pres_phone') != undefined) {
        $('#pres_phone').blur(function() {
            var result = validate_phone($('#pres_phone').val(), 0);
            if (result != "true")
            {
                errorify($('#pres_phone'), result);
            }
            else
            {
                correctify($('#pres_phone'), "Phone Number");
            }
        });
    }

//one of both must be there
    if (document.getElementById('mobile') != undefined) {
        $('#mobile').blur(function() {
            var result = validate_mobile_new($('#mobile').val(), 0);
            if (result != "true")
            {
                errorify($('#mobile'), result);
            }
            else
            {
                correctify($('#mobile'), "Mobile Number");
            }

        });
    }


    if (document.getElementById('perm_address1') != undefined) {
        $('#perm_address1').blur(function() {
            var result = validate_presAdd1($('#perm_address1').val(), 1);
            if (result != "true")
            {
                errorify($('#perm_address1'), result);
            }
            else
            {
                correctify($('#perm_address1'), "Applicant's Permanent Address(with Postal/Zip Code)");
            }
        });
    }

    if (document.getElementById('perm_address2') != undefined) {
        $('#perm_address2').blur(function() {

            var result = validate_presAdd2($('#perm_address2').val(), 0);
            if (result != "true")
            {
                errorify($('#perm_address2'), result);
            }
            else
            {
                correctify($('#perm_address2'), "Village/Town/City");
            }

        });
    }


    if (document.getElementById('perm_address3') != undefined) {
        $('#perm_address3').blur(function() {
            var result = validate_presAdd3($('#perm_address3').val(), 0);
            if (result != "true")
            {
                errorify($('#perm_address3'), result);
            }
            else
            {
                correctify($('#perm_address3'), "State/Province/District");
            }

        });
    }

    if (document.getElementById('fthrname') != undefined) {
        $('#fthrname').blur(function() {
            var result = validate_fatherName($('#fthrname').val(), 1);
            if (result != "true")
            {
                errorify($('#fthrname'), result);
            }
            else
            {
                correctify($('#fthrname'), "Applicant's Father Name");
            }

        });
    }
    if (document.getElementById('father_nationality') != undefined) {
        $('#father_nationality').blur(function() {
            var result = validate_Nationality($('#father_nationality').val(), 1);
            if (result != "true")
            {
                errorify($('#father_nationality'), result);
            }
            else
            {
                correctify($('#father_nationality'), "Father's Nationality");
            }
        });
    }

    if (document.getElementById('father_previous_nationality') != undefined) {
        $('#father_previous_nationality').blur(function() {
            var result = validate_Nationality($('#father_previous_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#father_previous_nationality'), result);
            }
            else
            {
                correctify($('#father_previous_nationality'), "Previous Nationality of Father");
            }

        });
    }
    if (document.getElementById('father_place_of_birth') != undefined) {
        $('#father_place_of_birth').blur(function() {
            var result = validate_placeOfBirth($('#father_place_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#father_place_of_birth'), result);
            }
            else
            {
                correctify($('#father_place_of_birth'), "Place of birth");
            }

        });
    }

    if (document.getElementById('father_country_of_birth') != undefined) {
        $('#father_country_of_birth').blur(function() {
            var result = validate_country($('#father_country_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#father_country_of_birth'), result);
            }
            else
            {
                correctify($('#father_country_of_birth'), "Country of birth");
            }

        });
    }

    if (document.getElementById('mother_name') != undefined) {
        $('#mother_name').blur(function() {
            var result = validate_motherName($('#mother_name').val(), 1);
            if (result != "true")
            {
                errorify($('#mother_name'), result);
            }
            else
            {
                correctify($('#mother_name'), "Applicant's Mother Name");
            }

        });
    }
    if (document.getElementById('mother_nationality') != undefined) {
        $('#mother_nationality').blur(function() {
            var result = validate_Nationality($('#mother_nationality').val(), 1);
            if (result != "true")
            {
                errorify($('#mother_nationality'), result);
            }
            else
            {
                correctify($('#mother_nationality'), "Mother's Nationality");
            }
        });
    }

    if (document.getElementById('mother_previous_nationality') != undefined) {
        $('#mother_previous_nationality').blur(function() {
            var result = validate_Nationality($('#mother_previous_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#mother_previous_nationality'), result);
            }
            else
            {
                correctify($('#mother_previous_nationality'), "Previous Nationality of Mother");
            }
        });
    }

    if (document.getElementById('mother_place_of_birth') != undefined) {
        $('#mother_place_of_birth').blur(function() {
            var result = validate_placeOfBirth($('#mother_place_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#mother_place_of_birth'), result);
            }
            else
            {
                correctify($('#mother_place_of_birth'), "Place of birth");
            }
        });
    }

    if (document.getElementById('mother_country_of_birth') != undefined) {
        $('#mother_country_of_birth').blur(function() {
            var result = validate_country($('#mother_country_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#mother_country_of_birth'), result);
            }
            else
            {
                correctify($('#mother_country_of_birth'), "Country of birth");
            }

        });
    }

    if (document.getElementById('marital_status') != undefined) {
        $('#marital_status').blur(function() {
            var result = validate_MaritalStatus($('#marital_status').val(), 1);
            if (result != "true")
            {
                errorify($('#marital_status'), result);
            }
            else
            {
                correctify($('#marital_status'), "Applicant´s Maritial Status");
            }
        });
    }

//only if married

    if (document.getElementById('spouse_name') != undefined) {
        $('#spouse_name').blur(function() {
            var result = validate_spouseName($('#spouse_name').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_name'), result);
            }
            else
            {
                correctify($('#spouse_name'), "Spouse Name");
            }
        });
    }
    if (document.getElementById('spouse_nationality') != undefined) {
        $('#spouse_nationality').blur(function() {
            var result = validate_Nationality($('#spouse_nationality').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_nationality'), result);
            }
            else
            {
                correctify($('#spouse_nationality'), "Spouse Nationality");
            }
        });
    }


    if (document.getElementById('spouse_previous_nationality') != undefined) {
        $('#spouse_previous_nationality').blur(function() {
            var result = validate_Nationality($('#spouse_previous_nationality').val(), 0);
            if (result != "true")
            {
                errorify($('#spouse_previous_nationality'), result);
            }
            else
            {
                correctify($('#spouse_previous_nationality'), "Spouse Previous Nationality");
            }
        });
    }



    if (document.getElementById('spouse_place_of_birth') != undefined) {
        $('#spouse_place_of_birth').blur(function() {
            var result = validate_placeOfBirth($('#spouse_place_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_place_of_birth'), result);
            }
            else
            {
                correctify($('#spouse_place_of_birth'), "Spouse Place of birth");
            }
        });
    }
//spouse_country_of_birth

    if (document.getElementById('spouse_country_of_birth') != undefined) {
        $('#spouse_country_of_birth').blur(function() {
            var result = validate_country($('#spouse_country_of_birth').val(), 1);
            if (result != "true")
            {
                errorify($('#spouse_country_of_birth'), result);
            }
            else
            {
                correctify($('#spouse_country_of_birth'), "Spouse country of birth");
            }
        });
    }
//refer flag
    if (document.getElementById('grandparent_flag1') != undefined) {
        $('#grandparent_flag1').blur(function() {
            if (document.getElementById('grandparent_flag1').checked == false && document.getElementById('grandparent_flag2').checked == false) {
                errorify($('#grandparent_flag1'), "Please select yes or no");
            } else {
                correctify($('#grandparent_flag1'), "");
                correctify($('#grandparent_flag1'), "Please select a value");
            }

        });
    }
    if (document.getElementById('grandparent_details') != undefined) {
        $('#grandparent_details').blur(function() {

            var result = validate_grandParentFlagDetails($('#grandparent_details').val(), 1);
            if (result != "true")
            {
                errorify($('#grandparent_details'), result);
            }
            else
            {
                correctify($('#grandparent_details'), "If Yes, give details");
            }
        });
    }

////////////occupation details validation ////////////

    if (document.getElementById('occupation') != undefined) {
        $('#occupation').blur(function() {

            var result = validate_Occupation($('#occupation').val(), 1);
            if (result != "true")
            {
                errorify($('#occupation'), result);
            }
            else
            {
                correctify($('#occupation'), "If Others,please specify");
            }

        });
    }
    if (document.getElementById('occupationOther') != undefined) {
        $('#occupationOther').blur(function() {
            var result = validate_Occupation_Details($('#occupationOther').val(), 1);
            if (result != "true")
            {
                errorify($('#occupationOther'), result);
            }
            else
            {
                correctify($('#occupationOther'), "");
            }

        });
    }
    if (document.getElementById('occ_flag') != undefined) {
        $('#occ_flag').blur(function() {
            var result = validate_occ_flag($('#occ_flag').val(), 1);
            if (result != "true")
            {
                errorify($('#occ_flag'), result);
            }
            else
            {
                correctify($('#occ_flag'), "In case of HouseWife/Student/Minor Please specify Spouse/Parent's Occupation details.");
            }

        });
    }
    if (document.getElementById('empname') != undefined) {
        $('#empname').blur(function() {
            var result = validate_employerName($('#empname').val(), 1);
            if (result != "true")
            {
                errorify($('#empname'), result);
            }
            else
            {
                correctify($('#empname'), "Employer Name / Business");
            }

        });
    }

    if (document.getElementById('empdesignation') != undefined) {
        $('#empdesignation').blur(function() {
            var result = validate_employerDesignation($('#empdesignation').val(), 0);
            if (result != "true")
            {
                errorify($('#empdesignation'), result);
            }
            else
            {
                correctify($('#empdesignation'), "Designation");
            }

        });
    }
    if (document.getElementById('empaddress') != undefined) {
        $('#empaddress').blur(function() {

            var result = validate_EmployerAddress1($('#empaddress').val(), 1);
            if (result != "true")
            {
                errorify($('#empaddress'), result);
            }
            else
            {
                correctify($('#empaddress'), "Address");
            }
        });
    }

    if (document.getElementById('empphone') != undefined) {
        $('#empphone').blur(function() {
            var result = validate_phone($('#empphone').val(), 0);
            if (result != "true")
            {
                errorify($('#empphone'), result);
            }
            else
            {
                correctify($('#empphone'), "Phone");
            }

        });
    }
    if (document.getElementById('empdept') != undefined) {
        $('#empdept').blur(function() {
            var result = validate_employer_department($('#empdept').val(), 1);
            if (result != "true")
            {
                errorify($('#empdept'), result);
            }
            else
            {
                correctify($('#empdept'), "Department");
            }

        });
    }
    if (document.getElementById('empsalary') != undefined) {
        $('#empsalary').blur(function() {
            var result = validate_employer_salary($('#empsalary').val(), 1);
            if (result != "true")
            {
                errorify($('#empsalary'), result);
            }
            else
            {
                correctify($('#empsalary'), "Monthly Income");
            }

        });
    }

    if (document.getElementById('previous_occupation') != undefined) {
        $('#previous_occupation').blur(function() {
            var result = validate_Occupation($('#previous_occupation').val(), 0);
            if (result != "true")
            {
                errorify($('#previous_occupation'), result);
            }
            else
            {
                correctify($('#previous_occupation'), "Past Occupation, if any");
            }
        });
    }


    if (document.getElementById('previous_occupation_details') != undefined) {
        $('#previous_occupation_details').blur(function() {

            var result = validate_Occupation_Details($('#previous_occupation_details').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_occupation_details'), result);
            }
            else
            {
                correctify($('#previous_occupation_details'), "Specify if others");
            }
        });
    }

    if (document.getElementById('prev_org1') != undefined) {
        $('#prev_org1').blur(function() {
            if (document.getElementById('prev_org1').checked == false && document.getElementById('prev_org2').checked == false) {
                errorify($('#prev_org1'), "Please select yes or no");
            } else {
                correctify($('#prev_org1'), "");
                correctify($('#prev_org1'), "If yes,give details");
            }

        });
    }


    if (document.getElementById('previous_organization') != undefined) {
        $('#previous_organization').blur(function() {

            var result = validate_organization($('#previous_organization').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_organization'), result);
            }
            else
            {
                correctify($('#previous_organization'), "Organization");
            }

        });
    }
    if (document.getElementById('previous_designation') != undefined) {
        $('#previous_designation').blur(function() {
            var result = validate_organization($('#previous_designation').val(), 1);
            if (result != "true")
            {
                errorify($('#previous_designation'), result);
            }
            else
            {
                correctify($('#previous_designation'), "Designation");
            }

        });
    }
    if (document.getElementById('previous_rank') != undefined) {
        $('#previous_rank').blur(function() {
            var result = validate_generic_alpha_sp($('#previous_rank').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#previous_rank'), result);
            }
            else
            {
                correctify($('#previous_rank'), "Rank");
            }

        });
    }

    if (document.getElementById('previous_posting') != undefined) {
        $('#previous_posting').blur(function() {
            var result = validate_generic_alpha_sp($('#previous_posting').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#previous_posting'), result);
            }
            else
            {
                correctify($('#previous_posting'), "Place of Posting");
            }

        });
    }

////////////VISA DETAILS FORM ****************/
    if (document.getElementById('nameofComp') != undefined) {
        $('#nameofComp').blur(function() {
            var result = validate_address_regex($('#nameofComp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofComp'), result);
            }
            else
            {
                correctify($('#nameofComp'), "");
            }
        });
    }

    if (document.getElementById('addofComp') != undefined) {
        $('#addofComp').blur(function() {
            var result = validate_generic_address($('#addofComp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#addofComp'), result);
            }
            else
            {
                correctify($('#addofComp'), "");
            }
        });
    }
    if (document.getElementById('phofComp') != undefined) {
        $('#phofComp').blur(function() {
            var result = validate_phone($('#phofComp').val(), 1);
            if (result != "true")
            {
                errorify($('#phofComp'), result);
            }
            else
            {
                correctify($('#phofComp'), "");
            }
        });
    }
    if (document.getElementById('emailofComp') != undefined) {
        $('#emailofComp').blur(function() {
            var result = validate_email($('#emailofComp').val(), 0);
            if (result != "true")
            {
                errorify($('#emailofComp'), result);
                submit = false;
            }
            else
            {
                correctify($('#emailofComp'), "");
            }
        });
    }

    if (document.getElementById('nameofInt') != undefined) {
        $('#nameofInt').blur(function() {
            var result = validate_generic_alpha_sp($('#nameofInt').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofInt'), result);
                submit = false;
            }
            else
            {
                correctify($('#nameofInt'), "");
            }
        });
    }
    if (document.getElementById('addofInt') != undefined) {
        $('#addofInt').blur(function() {
            var result = validate_generic_address($('#addofInt').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#addofInt'), result);
                submit = false;
            }
            else
            {
                correctify($('#addofInt'), "");
            }
        });
    }

    if (document.getElementById('phofInt') != undefined) {
        $('#phofInt').blur(function() {
            var result = validate_phone($('#phofInt').val(), 1);
            if (result != "true")
            {
                errorify($('#phofInt'), result);
                submit = false;
            }
            else
            {
                correctify($('#phofInt'), "");
            }
        });
    }

    if (document.getElementById('emailofInt') != undefined) {
        $('#emailofInt').blur(function() {
            var result = validate_email($('#emailofInt').val(), 0);
            if (result != "true")
            {
                errorify($('#emailofInt'), result);
                submit = false;
            }
            else
            {
                correctify($('#emailofInt'), "");
            }
        });
    }
    if (document.getElementById('course') != undefined) {
        $('#course').blur(function() {
            var result = validate_generic_alpha_num_sp($('#course').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#course'), result);
                submit = false;
            }
            else
            {
                correctify($('#course'), "");
            }
        });
    }
    if (document.getElementById('durofCourse') != undefined) {
        $('#durofCourse').blur(function() {
            var result = validate_generic_alpha_num_sp($('#durofCourse').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#durofCourse'), result);
                submit = false;
            }
            else
            {
                correctify($('#durofCourse'), "");
            }
        });
    }

//Research Visa R
    if (document.getElementById('nameofIntRea') != undefined) {
        $('#nameofIntRea').blur(function() {
            var result = validate_generic_alpha_sp($('#nameofIntRea').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofIntRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#nameofIntRea'), "");
            }
        });
    }
    if (document.getElementById('addofIntRea') != undefined) {
        $('#addofIntRea').blur(function() {
            var result = validate_generic_address($('#addofIntRea').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#addofIntRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#addofIntRea'), "");
            }
        });
    }
    if (document.getElementById('phofIntRea') != undefined) {
        $('#phofIntRea').blur(function() {
            var result = validate_phone($('#phofIntRea').val(), 1);
            if (result != "true")
            {
                errorify($('#phofIntRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#phofIntRea'), "");
            }
        });
    }
    if (document.getElementById('emailofIntRea') != undefined) {
        $('#emailofIntRea').blur(function() {
            var result = validate_email($('#emailofIntRea').val(), 0);
            if (result != "true")
            {
                errorify($('#emailofIntRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#emailofIntRea'), "");
            }
        });
    }
    if (document.getElementById('durofRea') != undefined) {
        $('#durofRea').blur(function() {
            var result = validate_generic_alpha_num_sp($('#durofRea').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#durofRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#durofRea'), "");
            }
        });
    }
    if (document.getElementById('subofRea') != undefined) {
        $('#subofRea').blur(function() {
            var result = validate_generic_alpha_num_sp($('#subofRea').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#subofRea'), result);
                submit = false;
            }
            else
            {
                correctify($('#subofRea'), "");
            }
        });
    }
    /** employment visa E */
    if (document.getElementById('profQual') != undefined) {
        $('#profQual').blur(function() {
            var result = validate_generic_alpha_sp($('#profQual').val(), 1, 30);
            if (result != "true")
            {
                errorify($('#profQual'), result);
                submit = false;
            }
            else
            {
                correctify($('#profQual'), "");
            }
        });
    }
    if (document.getElementById('compName') != undefined) {
        $('#compName').blur(function() {
            var result = validate_generic_alpha_sp($('#compName').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#compName'), result);
                submit = false;
            }
            else
            {
                correctify($('#compName'), "");
            }
        });
    }
    if (document.getElementById('compAdd') != undefined) {
        $('#compAdd').blur(function() {
            var result = validate_generic_address($('#compAdd').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#compAdd'), result);
                submit = false;
            }
            else
            {
                correctify($('#compAdd'), "");
            }
        });
    }
    if (document.getElementById('desgInComp') != undefined) {
        $('#desgInComp').blur(function() {
            var result = validate_generic_alpha_sp($('#desgInComp').val(), 1, 30);
            if (result != "true")
            {
                errorify($('#desgInComp'), result);
                submit = false;
            }
            else
            {
                correctify($('#desgInComp'), "");
            }
        });
    }
    if (document.getElementById('salInComp') != undefined) {
        $('#salInComp').blur(function() {
            var result = validate_generic_number($('#salInComp').val(), 0, 10);
            if (result != "true")
            {
                errorify($('#salInComp'), result);
                submit = false;
            }
            else
            {
                correctify($('#salInComp'), "");
            }
        });
    }
    if (document.getElementById('empEPFOid') != undefined) {
        $('#empEPFOid').blur(function() {
            var result = validate_generic_alpha_num($('#empEPFOid').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#empEPFOid'), result);
                submit = false;
            }
            else
            {
                correctify($('#empEPFOid'), "Employer's EPFO(Employee Provident Fund Organization) ID");
            }
        });
    }

//MEdical Attendant Visa patientname
    if (document.getElementById('patientname') != undefined) {
        $('#patientname').blur(function() {
            var result = validate_generic_alpha_sp($('#patientname').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#patientname'), result);
                submit = false;
            }
            else
            {
                correctify($('#patientname'), "");
            }
        });
    }

    if (document.getElementById('patientpassno') != undefined) {
        $('#patientpassno').blur(function() {
            var result = validate_passportNo($('#patientpassno').val(), 1);
            if (result != "true")
            {
                errorify($('#patientpassno'), result);
                submit = false;
            }
            else
            {
                correctify($('#patientpassno'), "");
            }
        });
    }

    if (document.getElementById('patientrel') != undefined) {
        $('#patientrel').blur(function() {
            var result = validate_generic_alpha_sp($('#patientrel').val(), 1, 14);
            if (result != "true")
            {
                errorify($('#patientrel'), result);
                submit = false;
            }
            else
            {
                correctify($('#patientrel'), "");
            }
        });
    }
// Medical Visa

    if (document.getElementById('hsptNameMsn') != undefined) {
        $('#hsptNameMsn').blur(function() {
            var result = validate_msn_hospital_name($('#hsptNameMsn').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#hsptNameMsn'), result);
                submit = false;
            }
            else
            {
                correctify($('#hsptNameMsn'), "");
            }
        });
    }
    if (document.getElementById('hsptNameInd') != undefined) {
        $('#hsptNameInd').blur(function() {
            var result = validate_ind_hospital_name($('#hsptNameInd').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#hsptNameInd'), result);
                submit = false;
            }
            else
            {
                correctify($('#hsptNameInd'), "");
            }
        });
    }
    if (document.getElementById('hsptAddMsn') != undefined) {
        $('#hsptAddMsn').blur(function() {
            var result = validate_msn_hospital_add($('#hsptAddMsn').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#hsptAddMsn'), result);
                submit = false;
            }
            else
            {
                correctify($('#hsptAddMsn'), "");
            }
        });
    }
    if (document.getElementById('hsptAddInd') != undefined) {
        $('#hsptAddInd').blur(function() {
            var result = validate_ind_hospital_add($('#hsptAddInd').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#hsptAddInd'), result);
                submit = false;
            }
            else
            {
                correctify($('#hsptAddInd'), "");
            }
        });
    }
    if (document.getElementById('docNameMsn') != undefined) {
        $('#docNameMsn').blur(function() {
            var result = validate_generic_alpha_sp($('#docNameMsn').val(), 0, 50);
            if (result != "true")
            {
                errorify($('#docNameMsn'), result);
                submit = false;
            }
            else
            {
                correctify($('#docNameMsn'), "");
            }
        });
    }
    if (document.getElementById('docNameInd') != undefined) {
        $('#docNameInd').blur(function() {
            var result = validate_generic_alpha_sp($('#docNameInd').val(), 0, 50);
            if (result != "true")
            {
                errorify($('#docNameInd'), result);
                submit = false;
            }
            else
            {
                correctify($('#docNameInd'), "");
            }
        });
    }
    if (document.getElementById('phMsn') != undefined) {
        $('#phMsn').blur(function() {
            var result = validate_phone($('#phMsn').val(), 0);
            if (result != "true")
            {
                errorify($('#phMsn'), result);
                submit = false;
            }
            else
            {
                correctify($('#phMsn'), "");
            }
        });
    }
    if (document.getElementById('phInd') != undefined) {
        $('#phInd').blur(function() {
            var result = validate_phone($('#phInd').val(), 0);
            if (result != "true")
            {
                errorify($('#phInd'), result);
                submit = false;
            }
            else
            {
                correctify($('#phInd'), "");
            }
        });
    }
    if (document.getElementById('emailMsn') != undefined) {
        $('#emailMsn').blur(function() {
            var result = validate_email($('#emailMsn').val(), 0);
            if (result != "true")
            {
                errorify($('#emailMsn'), result);
                submit = false;
            }
            else
            {
                correctify($('#emailMsn'), "");
            }
        });
    }
    if (document.getElementById('emailInd') != undefined) {
        $('#emailInd').blur(function() {
            var result = validate_email($('#emailInd').val(), 0);
            if (result != "true")
            {
                errorify($('#emailInd'), result);
                submit = false;
            }
            else
            {
                correctify($('#emailInd'), "");
            }
        });
    }

    if (document.getElementById('illness') != undefined) {
        $('#illness').blur(function() {
            var result = validate_generic_alpha_sp($('#illness').val(), 0, 50);
            if (result != "true")
            {
                errorify($('#illness'), result);
                submit = false;
            }
            else
            {
                correctify($('#illness'), "");
            }
        });
    }

//Transit Visa TR
    if (document.getElementById('chkboxbefInd') != undefined && document.getElementById('chkboxbefInd').checked == true) {
        $('#befCntryName').blur(function() {
            if (document.getElementById('befCntryName') != undefined) {
                var result = validate_generic_alpha_sp($('#befCntryName').val(), 1, 50);
                if (result != "true")
                {
                    errorify($('#befCntryName'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#befCntryName'), "");
                }
            }
        });
    }
    if (document.getElementById('chkboxAftInd') != undefined && document.getElementById('chkboxAftInd').checked == true) {
        $('#aftCntryName').blur(function() {
            if (document.getElementById('aftCntryName') != undefined) {
                var result = validate_generic_alpha_sp($('#aftCntryName').val(), 1, 50);
                if (result != "true")
                {
                    errorify($('#aftCntryName'), result);
                    submit = false;
                }
                else
                {
                    correctify($('#aftCntryName'), "");
                }
            }
        });
    }

//Transfer Visa TX
    if (document.getElementById('VTpassno') != undefined) {
        $('#VTpassno').blur(function() {
            var result = validate_passportNo($('#VTpassno').val(), 1);
            if (result != "true")
            {
                errorify($('#VTpassno'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTpassno'), "Passport No From which Visa is to be transferred.");
            }
        });
    }
    if (document.getElementById('VTvisano') != undefined) {
        $('#VTvisano').blur(function() {
            var result = validate_generic_alpha_num($('#VTvisano').val(), 1, 10);
            if (result != "true")
            {
                errorify($('#VTvisano'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTvisano'), "Visa No which needs to be transferred");
            }
        });
    }

    if (document.getElementById('VTvisatype') != undefined) {
        $('#VTvisatype').blur(function() {
            var result = validate_generic_address($('#VTvisatype').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#VTvisatype'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTvisatype'), "");
            }
        });
    }

    if (document.getElementById('VTissuepl') != undefined) {
        $('#VTissuepl').blur(function() {
            var result = validate_generic_alpha_sp($('#VTissuepl').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#VTissuepl'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTissuepl'), "");
            }
        });
    }
    if (document.getElementById('VTissuedt') != undefined) {
        $('#VTissuedt').blur(function() {
            var result = validate_visaIssueDate($('#VTissuedt').val(), 1);
            if (result != "true")
            {
                errorify($('#VTissuedt'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTissuedt'), "In dd/mm/yyyy format");
            }
        });
    }
    if (document.getElementById('VTexpirydt') != undefined) {
        $('#VTexpirydt').blur(function() {
            var result = validate_visaExpiryDate($('#VTexpirydt').val(), 1);
            if (result != "true")
            {
                errorify($('#VTexpirydt'), result);
                submit = false;
            }
            else
            {
                correctify($('#VTexpirydt'), "In dd/mm/yyyy format");
            }
        });
    }

    /***** project visa P */
    if (document.getElementById('nameofIndEmp') != undefined) {
        $('#nameofIndEmp').blur(function() {
            var result = validate_generic_address($('#nameofIndEmp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofIndEmp'), result);
                submit = false;
            }
            else
            {
                correctify($('#nameofIndEmp'), "");
            }
        });
    }
    if (document.getElementById('addofIndEmp') != undefined) {
        $('#addofIndEmp').blur(function() {
            var result = validate_generic_address($('#addofIndEmp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#addofIndEmp'), result);
                submit = false;
            }
            else
            {
                correctify($('#addofIndEmp'), "");
            }
        });
    }
    if (document.getElementById('plcEmp') != undefined) {
        $('#plcEmp').blur(function() {
            var result = validate_generic_address($('#plcEmp').val(), 1, 15);
            if (result != "true")
            {
                errorify($('#plcEmp'), result);
                submit = false;
            }
            else
            {
                correctify($('#plcEmp'), "");
            }
        });
    }
    if (document.getElementById('durEmp') != undefined) {
        $('#durEmp').blur(function() {
            var result = validate_generic_alpha_num_sp($('#durEmp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#durEmp'), result);
                submit = false;
            }
            else
            {
                correctify($('#durEmp'), "");
            }
        });
    }
    if (document.getElementById('natureofjob') != undefined) {
        $('#natureofjob').blur(function() {
            var result = validate_generic_alpha_num_sp($('#natureofjob').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#natureofjob'), result);
                submit = false;
            }
            else
            {
                correctify($('#natureofjob'), "");
            }
        });
    }
    if (document.getElementById('misNameComp') != undefined) {
        $('#misNameComp').blur(function() {
            var result = validate_generic_address($('#misNameComp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#misNameComp'), result);
                submit = false;
            }
            else
            {
                correctify($('#misNameComp'), "");
            }
        });
    }
    if (document.getElementById('misAddComp') != undefined) {
        $('#misAddComp').blur(function() {
            var result = validate_generic_address($('#misAddComp').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#misAddComp'), result);
                submit = false;
            }
            else
            {
                correctify($('#misAddComp'), "");
            }
        });
    }
//Tourist Visa T
    var result1 = "";
    if (document.getElementById('tou_pov1') != undefined) {
        $('#tou_pov1').blur(function() {
            result1 = validate_generic_address($('#tou_pov1').val(), 1, 50);
            if (result1 != "true")
            {

                errorify($('#tou_pov1'), result1);
                submit = false;
            }
            else
            {
               
                correctify($('#tou_pov1'), "If you intend to visit Protected/Restricted/Cantonment areas, you would require prior permission from the Civil Authority.<a target='_blank' href='http://www.mdoner.gov.in/content/rappap-restrictedprotected-area-permit'>Please visit this website.");
            }
        });
    }

    if (document.getElementById('tou_pov2') != undefined) {
        $('#tou_pov2').blur(function() {
            var result = validate_generic_address($('#tou_pov2').val(), 0, 50);
            if (result != "true")
            {
                errorify($('#tou_pov2'), result);
                submit = false;
            }
            else
            {
                if (result1 == "true")
                {
                    correctify($('#tou_pov2'), "");
                }

            }
        });
    }

    /* Conference Visa C*/
    if (document.getElementById('nameofEvent') != undefined) {
        $('#nameofEvent').blur(function() {
            var result = validate_generic_alpha_sp($('#nameofEvent').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofEvent'), result);
                submit = false;
            }
            else
            {
                correctify($('#nameofEvent'), "");
            }
        });
    }
    if (document.getElementById('venueEvent') != undefined) {
        $('#venueEvent').blur(function() {
            var result = validate_generic_address($('#venueEvent').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#venueEvent'), result);
                submit = false;
            }
            else
            {
                correctify($('#venueEvent'), "");
            }
        });
    }
    if (document.getElementById('nameOrg') != undefined) {
        $('#nameOrg').blur(function() {
            var result = validate_generic_alpha_sp($('#nameOrg').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameOrg'), result);
                submit = false;
            }
            else
            {
                correctify($('#nameOrg'), "");
            }
        });
    }
    if (document.getElementById('addOrg') != undefined) {
        $('#addOrg').blur(function() {
            var result = validate_generic_address($('#addOrg').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#addOrg'), result);
                submit = false;
            }
            else
            {
                correctify($('#addOrg'), "");
            }
        });
    }
    if (document.getElementById('phOrg') != undefined) {
        $('#phOrg').blur(function() {
            var result = validate_phone($('#phOrg').val(), 1);
            if (result != "true")
            {
                errorify($('#phOrg'), result);
                submit = false;
            }
            else
            {
                correctify($('#phOrg'), "");
            }
        });
    }

    /** Pilgrims visa PL */
    if (document.getElementById('plv_placevisited') != undefined) {
        $('#plv_placevisited').blur(function() {
            var result = validate_generic_address($('#plv_placevisited').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#plv_placevisited'), result);
                submit = false;
            }
            else
            {
                correctify($('#plv_placevisited'), "");
            }
        });
    }

    if (document.getElementById('plv_grpl') != undefined) {
        $('#plv_grpl').blur(function() {
            var result = validate_generic_alpha_sp($('#plv_grpl').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#plv_grpl'), result);
                submit = false;
            }
            else
            {
                correctify($('#plv_grpl'), "");
            }
        });
    }
    if (document.getElementById('plv_grpl_contact') != undefined) {
        $('#plv_grpl_contact').blur(function() {
            var result = validate_phone($('#plv_grpl_contact').val(), 1);
            if (result != "true")
            {
                errorify($('#plv_grpl_contact'), result);
                submit = false;
            }
            else
            {
                correctify($('#plv_grpl_contact'), "");
            }
        });
    }
    if (document.getElementById('plv_org_name') != undefined) {
        $('#plv_org_name').blur(function() {
            var result = validate_generic_alpha_sp($('#plv_org_name').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#plv_org_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#plv_org_name'), "");
            }
        });
    }
    if (document.getElementById('plv_org_add') != undefined) {
        $('#plv_org_add').blur(function() {
            var result = validate_generic_address($('#plv_org_add').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#plv_org_add'), result);
                submit = false;
            }
            else
            {
                correctify($('#plv_org_add'), "");
            }
        });
    }
    /** official visa O */
    if (document.getElementById('off_name') != undefined) {
        $('#off_name').blur(function() {
            var result = validate_generic_alpha_sp($('#off_name').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#off_name'), result);
                submit = false;
            }
            else
            {
                correctify($('#off_name'), "");
            }
        });
    }
    if (document.getElementById('off_dept') != undefined) {
        $('#off_dept').blur(function() {
            var result = validate_generic_alpha_sp($('#off_dept').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#off_dept'), result);
                submit = false;
            }
            else
            {
                correctify($('#off_dept'), "");
            }
        });
    }
    if (document.getElementById('off_add') != undefined) {
        $('#off_add').blur(function() {
            var result = validate_generic_address($('#off_add').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#off_add'), result);
                submit = false;
            }
            else
            {
                correctify($('#off_add'), "");
            }
        });
    }
    if (document.getElementById('off_ph') != undefined) {
        $('#off_ph').blur(function() {
            var result = validate_phone($('#off_ph').val(), 0);
            if (result != "true")
            {
                errorify($('#off_ph'), result);
                submit = false;
            }
            else
            {
                correctify($('#off_ph'), "");
            }
        });
    }
    if (document.getElementById('duration') != undefined) {
        $('#duration').blur(function() {
            var result = validate_duration($('#duration').val(), 1);
            if (result != "true")
            {
                errorify($('#duration'), result);
            }
            else
            {
                correctify($('#duration'), "");
            }
        });
    }
    if (document.getElementById('visa_entry_id') != undefined) {
        $('#visa_entry_id').blur(function() {
            var result = validate_visa_entry_id($('#visa_entry_id').val(), 1);
            if (result != "true")
            {
                errorify($('#visa_entry_id'), result);
            }
            else
            {
                correctify($('#visa_entry_id'), "");
            }
        });
    }

    if (document.getElementById('purpose') != undefined) {
        $('#purpose').blur(function() {
            var result = validate_purpose($('#purpose').val(), 1);
            if (result != "true")
            {
                errorify($('#purpose'), result);
            }
            else
            {
                correctify($('#purpose'), "");
            }
        });
    }
    if (document.getElementById('entrypoint') != undefined) {
        $('#entrypoint').blur(function() {
            var result = validate_entrypoint($('#entrypoint').val(), 1);
            if (result != "true")
            {
                errorify($('#entrypoint'), result);
            }
            else
            {
                correctify($('#entrypoint'), "");
            }
        });
    }
    if (document.getElementById('exitpoint') != undefined) {
        $('#exitpoint').blur(function() {
            var result = validate_exitPoint($('#exitpoint').val(), 0);
            if (result != "true")
            {
                errorify($('#exitpoint'), result);
            }
            else
            {
                correctify($('#exitpoint'), "");
            }
        });
    }
    if (document.getElementById('exitpointprc') != undefined) {
        $('#exitpointprc').blur(function() {
            var result = validate_exitPoint($('#exitpointprc').val(), 1);
            if (result != "true")
            {
                errorify($('#exitpointprc'), result);
            }
            else
            {
                correctify($('#exitpointprc'), "");
            }
        });
    }


    if (document.getElementById('old_visa_flag2') != undefined) {
        $('#old_visa_flag2').blur(function() {
            if (document.getElementById('old_visa_flag1').checked == false && document.getElementById('old_visa_flag2').checked == false) {
                errorify($('#old_visa_flag1'), "Please select yes or no");
                submit = false;
            } else {
                correctify($('#old_visa_flag1'), "");
                correctify($('#old_visa_flag1'), "If yes,give details");
            }
        });
    }

    /* old visa visit */



    $('#prv_visit_add1').blur(function() {
        if (document.getElementById('prv_visit_add1') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
            var result = validate_presAdd1($('#prv_visit_add1').val(), 1);
            if (result != "true")
            {
                errorify($('#prv_visit_add1'), result);
            }
            else
            {
                correctify($('#prv_visit_add1'), "");
            }
        }
    });


    if (document.getElementById('prv_visit_add2') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
        $('#prv_visit_add2').blur(function() {
            var result = validate_presAdd2($('#prv_visit_add2').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add2'), result);
            }
            else
            {
                correctify($('#prv_visit_add2'), "");
            }
        });
    }
    if (document.getElementById('prv_visit_add3') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
        $('#prv_visit_add3').blur(function() {
            var result = validate_presAdd3($('#prv_visit_add3').val(), 0);
            if (result != "true")
            {
                errorify($('#prv_visit_add3'), result);
            }
            else
            {
                correctify($('#prv_visit_add3'), "");
            }
        });
    }


    $('#visited_city').blur(function() {
        if (document.getElementById('visited_city') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
            var result = validate_visited_city($('#visited_city').val(), 1);
            if (result != "true")
            {
                errorify($('#visited_city'), result);
            }
            else
            {
                correctify($('#visited_city'), "Cities in India visited (comma separated)");
            }
        }

    });


    $('#old_visa_no').blur(function() {
        if (document.getElementById('old_visa_no') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
            var result = validate_generic_alpha_num($('#old_visa_no').val(), 1, 10);
            if (result != "true")
            {
                errorify($('#old_visa_no'), result);
            }
            else
            {
                correctify($('#old_visa_no'), "Last Indian Visa no / Currently valid Visa no");
            }

        }
    });



    $('#old_visa_type_id').blur(function() {
        if (document.getElementById('old_visa_type_id') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
            var result = validate_visa_service($('#old_visa_type_id').val(), 1);
            if (result != "true")
            {
                errorify($('#old_visa_type_id'), result);
            }
            else
            {
                correctify($('#old_visa_type_id'), "Type of Visa");
            }
        }
    });



    $('#oldvisaissueplace').blur(function() {
        if (document.getElementById('oldvisaissueplace') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
            var result = validate_generic_alpha_sp($('#oldvisaissueplace').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#oldvisaissueplace'), result);
            }
            else
            {
                correctify($('#oldvisaissueplace'), "Place of Issue");
            }
        }
    });

    if (document.getElementById('oldvisaissuedate') != undefined && document.getElementById('old_visa_flag1') != undefined && document.getElementById('old_visa_flag1').checked == true) {
        $('#oldvisaissuedate').blur(function() {
            $('#oldvisaissuedate').val(changeDate($('#oldvisaissuedate').val()));
            var result = validate_visaIssueDate($('#oldvisaissuedate').val(), 1);
            if (result != "true")
            {
                errorify($('#oldvisaissuedate'), result);
            }
            else
            {
                correctify($('#oldvisaissuedate'), "Date of Issue");
            }
        });
    }

    /* end of old visa visit */

    if (document.getElementById('refuse_flag1') != undefined) {
        $('#refuse_flag2').blur(function() {
            if (document.getElementById('refuse_flag1').checked == false && document.getElementById('refuse_flag2').checked == false) {
                errorify($('#refuse_flag1'), "Please select yes or no");
            } else {
                correctify($('#refuse_flag1'), "");
                correctify($('#refuse_flag1'), "If yes,give details");
            }
        });
    }


//8 fields are there
    if (document.getElementById('refuse_details') != undefined && document.getElementById('refuse_flag1') != undefined) {
        $('#refuse_details').blur(function() {
            if (document.getElementById('refuse_flag1').checked == true) {
                var result = validate_generic_address($('#refuse_details').val(), 1, 100);

                if (result != "true")
                {
                    errorify($('#refuse_details'), result);
                }
                else
                {
                    correctify($('#refuse_details'), "");
                }
            }
        });
    }
    if (document.getElementById('country_visited') != undefined) {
        $('#country_visited').blur(function() {
            var result = validate_generic_address($('#country_visited').val(), 0, 100);
            if (result != "true")
            {
                errorify($('#country_visited'), result);
            }
            else
            {
                correctify($('#country_visited'), "");
            }
        });
    }
    if (document.getElementById('saarc_flag1') != undefined) {
        $('#saarc_flag2').blur(function() {
            if (document.getElementById('saarc_flag1').checked == false && document.getElementById('saarc_flag2').checked == false) {
                errorify($('#saarc_flag1'), "Please select yes or no");
            } else {
                correctify($('#saarc_flag1'), "");
                correctify($('#saarc_flag1'), "If yes,give details");
            }
        });
    }


//now validate all the saarc fields
    if (document.getElementsByClassName('.saarcCountry') != undefined)
    {
        $(".saarcCountry").each(function() {
            $('.saarcCountry').blur(function() {
                if (document.getElementById('saarc_flag1') != undefined && document.getElementById('saarc_flag1').checked == true) {
                    var result = validate_Country_of_birth($(this).val(), 1)
                    if (result != "true")
                    {
                        errorify_saarc($(this), result);
                    }
                    else
                    {
                        correctify_saarc($(this), "");
                    }
                }
            });
        });
    }

    if (document.getElementsByClassName('.saarcCountry') != undefined)
    {
        $(".saarcYear").each(function() {
            $('.saarcYear').blur(function() {
                if (document.getElementById('saarc_flag1') != undefined && document.getElementById('saarc_flag1').checked == true) {
                    var result = validate_generic_number($(this).val(), 1, 4);
                    if (result != "true")
                    {
                        errorify_saarc2($(this), result);
                    }
                    else
                    {
                        correctify_saarc2($(this), "");
                    }
                }
            });
        });
    }

    if (document.getElementsByClassName('.saarcCountry') != undefined)
    {
        $(".saarcVisitNo").each(function() {
            $('.saarcVisitNo').blur(function() {
                if (document.getElementById('saarc_flag1') != undefined && document.getElementById('saarc_flag1').checked == true) {
                    var result = validate_generic_number($(this).val(), 1, 3);
                    if (result != "true")
                    {
                        errorify_saarc3($(this), result);
                    }
                    else
                    {
                        correctify_saarc3($(this), "");
                    }
                }
            });
        });
    }

    if (document.getElementById('nameofsponsor_ind') != undefined) {
        $('#nameofsponsor_ind').blur(function() {
            var result = validate_address_regex($('#nameofsponsor_ind').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofsponsor_ind'), result);
            }
            else
            {
                correctify($('#nameofsponsor_ind'), "");
            }
        });
    }
    if (document.getElementById('add1ofsponsor_ind') != undefined) {
        $('#add1ofsponsor_ind').blur(function() {
            var result = validate_generic_address($('#add1ofsponsor_ind').val(), 1, 35);
            if (result != "true")
            {
                errorify($('#add1ofsponsor_ind'), result);
            }
            else
            {
                correctify($('#add1ofsponsor_ind'), "");
            }
        });
    }
    if (document.getElementById('add2ofsponsor_ind') != undefined) {
        $('#add2ofsponsor_ind').blur(function() {
            var result = validate_generic_address($('#add2ofsponsor_ind').val(), 0, 35);
            if (result != "true")
            {
                errorify($('#add2ofsponsor_ind'), result);
            }
            else
            {
                correctify($('#add2ofsponsor_ind'), "");
            }
        });
    }

    if (document.getElementById('phoneofsponsor_ind') != undefined) {
        $('#phoneofsponsor_ind').blur(function() {
            var result = validate_phone($('#phoneofsponsor_ind').val(), 1);
            if (result != "true")
            {
                errorify($('#phoneofsponsor_ind'), result);
            }
            else
            {
                correctify($('#phoneofsponsor_ind'), "Phone no");
            }
        });
    }

    if (document.getElementById('nameofsponsor_msn') != undefined) {
        $('#nameofsponsor_msn').blur(function() {
            var result = validate_address_regex($('#nameofsponsor_msn').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#nameofsponsor_msn'), result);
            }
            else
            {
                correctify($('#nameofsponsor_msn'), "");
            }
        });
    }

    if (document.getElementById('add1ofsponsor_msn') != undefined) {
        $('#add1ofsponsor_msn').blur(function() {
            var result = validate_generic_address($('#add1ofsponsor_msn').val(), 1, 35);
            if (result != "true")
            {
                errorify($('#add1ofsponsor_msn'), result);
            }
            else
            {
                correctify($('#add1ofsponsor_msn'), "");
            }
        });
    }

    if (document.getElementById('add2ofsponsor_msn') != undefined) {
        $('#add2ofsponsor_msn').blur(function() {
            var result = validate_generic_address($('#add2ofsponsor_msn').val(), 0, 35);
            if (result != "true")
            {
                errorify($('#add2ofsponsor_msn'), result);
            }
            else
            {
                correctify($('#add2ofsponsor_msn'), "");
            }
        });
    }
    if (document.getElementById('phoneofsponsor_msn') != undefined) {
        $('#phoneofsponsor_msn').blur(function() {
            var result = validate_phone($('#phoneofsponsor_msn').val(), 1);
            if (result != "true")
            {
                errorify($('#phoneofsponsor_msn'), result);
            }
            else
            {
                correctify($('#phoneofsponsor_msn'), "Phone no");
            }
        });
    }

//onblur for pakistan visit details


    if (document.getElementById('verifier_name') != undefined) {
        $('#verifier_name').blur(function() {
            var result = validate_generic_alpha_sp($('#verifier_name').val(), 1, 75);
            if (result != "true")
            {
                errorify($('#verifier_name'), result);
            }
            else
            {
                correctify($('#verifier_name'), "");
            }
        });
    }
    if (document.getElementById('verifier_phone') != undefined) {
        $('#verifier_phone').blur(function() {
            var result = validate_phone($('#verifier_phone').val(), 0);
            if (result != "true")
            {
                errorify($('#verifier_phone'), result);
            }
            else
            {
                correctify($('#verifier_phone'), "");
            }
        });
    }
    if (document.getElementById('verifier_org') != undefined) {
        $('#verifier_org').blur(function() {
            var result = validate_generic_alpha_num_sp($('#verifier_org').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#verifier_org'), result);
            }
            else
            {
                correctify($('#verifier_org'), "");
            }
        });
    }
    if (document.getElementById('verifier_desg') != undefined) {
        $('#verifier_desg').blur(function() {
            var result = validate_generic_alpha_sp($('#verifier_desg').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#verifier_desg'), result);
            }
            else
            {
                correctify($('#verifier_desg'), "");
            }
        });
    }
    if (document.getElementById('verifier_rank') != undefined) {
        $('#verifier_rank').blur(function() {
            var result = validate_generic_alpha_num_sp($('#verifier_rank').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#verifier_rank'), result);
            }
            else
            {
                correctify($('#verifier_rank'), "");
            }
        });
    }
    if (document.getElementById('verifier_posting') != undefined) {
        $('#verifier_posting').blur(function() {
            var result = validate_generic_alpha_num_sp($('#verifier_posting').val(), 1, 50);
            if (result != "true")
            {
                errorify($('#verifier_posting'), result);
            }
            else
            {
                correctify($('#verifier_posting'), "");
            }
        });
    }
    if (document.getElementById('pov11') != undefined) {
        $('#pov11').blur(function() {
            var result = validate_generic_alpha_num_sp($('#pov11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pov11'), result);
            }
            else
            {
                correctify_same($('#pov11'), "");
            }
        });
    }


    if (document.getElementById('pov_state_id11') != undefined) {
        $('#pov_state_id11').blur(function() {
            var result = validate_generic_alpha_num_sp($('#pov_state_id11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#pov_state_id11'), result);
            }
            else
            {
                correctify_same($('#pov_state_id11'), "");
            }
        });
    }

    for (var i = 2; i <= 8; i++) {
        if (document.getElementById('pov1' + i) != undefined && document.getElementById('pov1' + i).style.display == 'block') {
            $('#pov1' + i).blur(function() {
                var result = validate_generic_alpha_num_sp($('#pov1' + i).val(), 1, 50);
                if (result != "true")
                {
                    errorify_same($('#pov1' + i), result);
                }
                else
                {
                    correctify_same($('#pov1' + i), "");
                }
            });
        }
        if (document.getElementById('pov_state_id1' + i) != undefined && document.getElementById('pov_state_id1' + i).style.display == 'block') {
            $('#pov_state_id1' + i).blur(function() {
                var result = validate_generic_alpha_num_sp($('#pov_state_id1' + i).val(), 1, 50);
                if (result != "true")
                {
                    errorify_same($('#pov_state_id' + i), result);
                }
                else
                {
                    correctify_same($('#pov_state_id' + i), "");
                }
            });
        }
    }

//relative validationstarts
    if (document.getElementById('relative_name11') != undefined) {
        $('#relative_name11').blur(function() {
            var result = validate_generic_alpha_sp($('#relative_name11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_name11'), result);
            }
            else
            {
                correctify_same($('#relative_name11'), "");
            }
        });
    }
    if (document.getElementById('relation11') != undefined) {
        $('#relation11').blur(function() {
            var result = validate_generic_alpha_sp($('#relation11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relation11'), result);
            }
            else
            {
                correctify_same($('#relation11'), "");
            }
        });
    }
    if (document.getElementById('relative_address11') != undefined) {
        $('#relative_address11').blur(function() {
            var result = validate_generic_address($('#relative_address11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_address11'), result);
            }
            else
            {
                correctify_same($('#relative_address11'), "");
            }
        });
    }
    if (document.getElementById('relative_place11') != undefined) {
        $('#relative_place11').blur(function() {
            var result = validate_generic_address($('#relative_place11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_place11'), result);
            }
            else
            {
                correctify_same($('#relative_place11'), "");
            }
        });
    }
    if (document.getElementById('relative_state_id11') != undefined) {
        $('#relative_state_id11').blur(function() {
            var result = validate_generic_alpha_num_sp($('#relative_state_id11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_state_id11'), result);
            }
            else
            {
                correctify_same($('#relative_state_id11'), "");
            }
        });
    }
    if (document.getElementById('relative_dist_id11') != undefined) {
        $('#relative_dist_id11').blur(function() {
            var result = validate_generic_alpha_num_sp($('#relative_dist_id11').val(), 1, 50);
            if (result != "true")
            {
                errorify_same($('#relative_dist_id11'), result);
            }
            else
            {
                correctify_same($('#relative_dist_id11'), "");
            }
        });
    }
    if (document.getElementById('relative_pin_code11') != undefined) {
        $('#relative_pin_code11').blur(function() {
            var result = validate_ind_pincode($('#relative_pin_code11').val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_pin_code11'), result);
            }
            else
            {
                correctify_same($('#relative_pin_code11'), "");
            }
        });
    }
    if (document.getElementById('relative_phone11') != undefined) {
        $('#relative_phone11').blur(function() {
            var result = validate_phone($('#relative_phone11').val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_phone11'), result);
            }
            else
            {
                correctify_same($('#relative_phone11'), "");
            }
        });
    }

    for (var i = 2; i <= 8; i++) {

        if (document.getElementById('relative_name1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_name1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relation1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relation1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_address1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_address1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_place1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_place1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_state_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_state_id1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_dist_id1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_dist_id1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_pin_code1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_pin_code1' + i).blur(function() {
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
            });
        }
        if (document.getElementById('relative_phone1' + i) != undefined && document.getElementById('R1' + i).style.display == 'block') {
            $('#relative_phone1' + i).blur(function() {
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
            });
        }

    }

    if (document.getElementById('jkVisit1') != undefined) {
        $('#jkVisit1').blur(function() {
            if (document.getElementById('jkVisit1').checked == false && document.getElementById('jkVisit2').checked == false) {
                errorify($('#jkVisit1'), "Please select yes or no");
            } else {
                correctify($('#jkVisit1'), "");
            }
        });
    }
    if (document.getElementById('jkParent1') != undefined) {
        $('#jkParent1').blur(function() {
            if (document.getElementById('jkParent1').checked == false && document.getElementById('jkParent2').checked == false) {
                errorify($('#jkParent1'), "Please select yes or no");
            } else {
                correctify($('#jkParent1'), "");
            }
        });
    }

    if (document.getElementById('mgt1') != undefined && document.getElementById('mgtDate') != undefined) {
        $('#mgtDate').blur(function() {
            if (document.getElementById('mgt1').checked == true) {
                if (document.getElementById('mgtDate') != undefined) {
                    var result = validate_migrationDate($('#mgtDate').val(), 1);
                    if (result != "true")
                    {
                        errorify($('#mgtDate'), result);

                    }
                    else
                    {
                        correctify($('#mgtDate'), "In (DD/MM/YYYY) format");
                    }
                }
            }

        });
        $('#mgtDetails').blur(function() {
            if (document.getElementById('mgt1').checked == true) {
                if (document.getElementById('mgtDetails') != undefined) {
                    var result = validate_generic_alpha_sp($('#mgtDetails').val(), 1, 50);
                    if (result != "true")
                    {
                        errorify($('#mgtDetails'), result);

                    }
                    else
                    {
                        correctify($('#mgtDetails'), "");
                    }
                }
            }
        });
    }


    if (document.getElementById('missioncode_id_reprint') != undefined) {
        $('#missioncode_id_reprint').blur(function() {
            if (document.getElementById('visa_type2').checked == true) {
                var result = validate_missionCode_reprint($('#missioncode_id_reprint').val(), 1);
                if (result != "true")
                {
                    errorify($('#missioncode_id_reprint'), result);
                }
                else
                {
                    correctify($('#missioncode_id_reprint'), "Select mission");
                }
            }
        });
    }
    if (document.getElementById('port_id') != undefined) {
        $('#port_id').blur(function() {
            var result = validate_missionCode_reprint($('#port_id').val(), 1);
            if (result != "true")
            {
                errorify($('#port_id'), result);
                submit = false;
            }
            else
            {
                correctify($('#port_id'), "Select port of arrival");
            }
        });
    }
    if (document.getElementById('application_id') != undefined) {
        $('#application_id').blur(function() {
            var result = validate_filenumber($('#application_id').val(), 1);
            if (result != "true")
            {
                errorify($('#application_id'), result);
                submit = false;
            }
            else
            {
                correctify($('#application_id'), "");
            }
        });
    }

    if (document.getElementsByClassName('app_field')[0] != undefined) {
        $(document.getElementsByClassName('app_field')[0]).blur(function() {
            var field_val1 = document.getElementsByClassName('app_field')[0].value;
            var result = validate_generic_alpha_sp(field_val1, 1, 50);
            if (result != "true")
            {
                errorify($(document.getElementsByClassName('app_field')[0]), result);
                submit = false;
            }
            else
            {
                correctify($(document.getElementsByClassName('app_field')[0]), "");
            }
        });
    }

    if (document.getElementsByClassName('app_field')[1] != undefined) {
        $(document.getElementsByClassName('app_field')[1]).blur(function() {
            var field_val2 = document.getElementsByClassName('app_field')[1].value;
            var result = validate_generic_alpha_sp(field_val2, 1, 50);
            if (result != "true")
            {
                errorify($(document.getElementsByClassName('app_field')[1]), result);
                submit = false;
            }
            else
            {
                correctify($(document.getElementsByClassName('app_field')[1]), "");
            }
        });
    }


});

function load_service_req_blurs() {

    $('.service_req_form_val').each(function(i, obj) {

        $($(this)).blur(function() {
            var label = $(this).parent().prev().html();
            label = $.trim(label.replace(/\s{2,}/g, ' '));

            if (label == "Places to be visited") {
                var res = validate_places_to_be_visited($(this).val(), "1");
                if (res != "true")
                {
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
                    errorify($(this), res);
                }
                else {
                    correctify($(this), "");
                }
            }
            else if (label == "Address of Hospital") {
                var res = validate_generic_data($(this).val(), 1, 50);
                if (res != "true")
                {
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
                    errorify($(this), res);
                }
                else {
                    correctify($(this), "");
                }
            }
            else if (label == "Address, Phone no" || label == "Address,Phone no") {
                var res = validate_generic_data($(this).val(), 1, 50);
                if (res != "true")
                {
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
                    errorify($(this), res);
                }
                else {
                    correctify($(this), "");
                }
            }
            else if (label == "Nature of Business/Product") {
                var res = validate_generic_data($(this).val(), 1, 50);
                if (res != "true")
                {
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
                    errorify($(this), res);
                }
                else {
                    correctify($(this), "");
                }
            } else if (label == "Name and address of the Exhibition/trade fair") {
                var res = validate_generic_data($(this).val(), 1, 50);
                if (res != "true")
                {
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
                    errorify($(this), res);
                }
                else {
                    correctify($(this), "");
                }
            }

        });
    });

}