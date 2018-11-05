
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

var Browser = {
    Version: function() {
        var version = 999; // we assume a sane browser
        if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
}

function validate_passportNo(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Passport number is required";
        else if (value.length < 1)
            return "Passport number is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 14) == false)
            return "Passport No. can contain 14 characters maximum";
        else if (alphabetNumberRegex(value) == false)
            return "Enter Alphabets or numbers only";
    }
    return "true";
}

function compare_two_dates_diff(date1, date2, day_diff) {
    // This function is used to calculate difference between two dates
    // return true if calculated days of difference are greater than given days (day_diff)..

    //date1 - passportExpiryDate
    //date2 - JourneyDate

    //convert value into date object
    var n = date1.split("/");
    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var newDate1 = new Date(n[2], n[1], n[0]);
    newDate1.setHours(0, 0, 0, 0);

    var m = date2.split("/");
    if (m[0].substring(0, 1) == "0") {
        m[0] = m[0].substring(1, 2);
    }
    m[1] = m[1] - 1;
    var newDate2 = new Date(m[2], m[1], m[0]);
    newDate2.setHours(0, 0, 0, 0);

    var timeDiff = Math.abs(newDate1.getTime() - newDate2.getTime());
    var diffDays_var = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays_var > day_diff)
        return true;
    else
        return false;
}





function validate_Booklet_no(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Booklet number is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 10) == false)
            return "Booklet No. can contain 10 characters maximum";
        else if (alphabetNumberRegex(value) == false)
            return "Enter Alphabets or numbers only";
    }
    return "true";
}

function validate_track_no(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Track number is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 20) == false)
            return "Tracking No. can contain 20 characters maximum";
        else if (alphabetNumberRegex(value) == false)
            return "Enter Alphabets or numbers only";
    }
    return "true";
}

function validate_duration(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false || value == 0)
            return "Duration is required";

        else if (validateLength(value, 3) == false)
            return "Maximum 3 digits";
        else if (IntRegex(value) == false)
            return "Enter digits only";
    }
    return "true";
}

function validate_visa_entry_id(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Visa entry type is required";

        else if (validateLength(value, 1) == false)
            return "Invalid";
        else if (IntRegex(value) == false)
            return "Invalid";
    }
    return "true";
}
function validate_purpose(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Purpose is required";

        else if (validateLength(value, 40) == false)
            return "Invalid";
        else if (addressRegex(value) == false)
            return "Invalid";
    }
    return "true";
}
function validate_entrypoint(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Entry point is required";

        else if (validateLength(value, 50) == false)
            return "Invalid";
        else if (addressRegex(value) == false)
            return "Invalid";
    }
    return "true";
}


function validate_exitPoint(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Exit point is required";

        else if (validateLength(value, 50) == false)
            return "Maximum 50 characters allowed";
        else if (addressRegex(value) == false)
            return "Invalid Characters";
    }
    return "true";
}
function validate_nic_no(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Citizenship/National Id No number is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 30) == false)
            return "Maximum 30 characters";
        else if (alphabetNumberRegex(value) == false)
            return "Enter Alphabets or numbers only";
    }
    return "true";
}

function required(myvalue) {
    myvalue = myvalue + "";
    myvalue = myvalue.replace(/^\s+|\s+$/gm, '');//for trim   
    if (myvalue == "" || myvalue == '' || myvalue.length == 0)
        return false;
    else
        return true;
}

function emailRegex(value) {

    var result = value.match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i);
    if (result == null)
        return false;
    else
        return true;
}

function validateLength(value, reqlength) {

    if (value.length <= reqlength)
        return true;

    else
        return false;
}

function errorify(referId, result) {

    referId.parent().next().empty().addClass("error1").append(result);
    referId.addClass("error_input");
}

function correctify(referId, result) {
    //   value = value.replace(/^(&nbsp;|<br>)+/, '');
    $(referId).val($(referId).val().replace(/^(&nbsp;|<br>)+/, ''));
    $(referId).val($.trim($(referId).val().toUpperCase().replace(/\s{2,}/g, ' ')));
    //alert("after = "+$(referId).val());
    referId.parent().next().empty().removeClass("error1").append(result);
    referId.removeClass("error_input");
}

function errorify_image(referId, result) {

    referId.parent().next().empty().addClass("error1").append(result);
    referId.parent().next().addClass("text_error");
    referId.addClass("error_input");

}

function correctify_image(referId, result) {

    referId.parent().next().empty().removeClass("error1").append(result);
    referId.parent().next().removeClass("text_error");
    referId.removeClass("error_input");
}

function correctify_lowercase(referId, result) {
    //alert("before = "+$(referId).val());
    $(referId).val($.trim($(referId).val().replace(/\s{2,}/g, ' ')));
    //alert("after = "+$(referId).val());
    referId.parent().next().empty().removeClass("error1").append(result);
    referId.removeClass("error_input");
}

function errorify_saarc(referId, result) {

    referId.parent().next().next().next().next().empty().addClass("error1").append(result);
    referId.addClass("error_input");

}
function correctify_saarc(referId) {
    $(referId).val($.trim($(referId).val().toUpperCase().replace(/\s{2,}/g, ' ')));
    referId.parent().next().next().next().next().empty();
    referId.removeClass("error_input");
}
function errorify_saarc2(referId, result) {
    referId.parent().next().next().next().empty().addClass("error1").append(result);
    referId.addClass("error_input");

}
function correctify_saarc2(referId) {
    $(referId).val($.trim($(referId).val().toUpperCase().replace(/\s{2,}/g, ' ')));
    referId.parent().next().next().next().empty();
    referId.removeClass("error_input");
}
function errorify_saarc3(referId, result) {

    referId.parent().next().next().empty().addClass("error1").append(result);
    referId.addClass("error_input");

}
function correctify_saarc3(referId) {
    $(referId).val($.trim($(referId).val().toUpperCase().replace(/\s{2,}/g, ' ')));
    referId.parent().next().next().empty();
    referId.removeClass("error_input");
}

function errorify_same(referId, result) {
    referId.parent().find('span').remove();
    referId.parent().append("<span class='error2'>" + result + "</span>");
    referId.addClass("error_input");
    referId.parent().parent().css('display', 'block');
}

function correctify_same(referId) {
    $(referId).val($.trim($(referId).val().toUpperCase().replace(/\s{2,}/g, ' ')));
    referId.parent().find('span').remove();
    referId.removeClass("error_input");
}

function validate_passportIssueDate(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (requiredOrNot == 1 && required(value) == false)
            return "Passport issue date is required";
        else if (checkForOldIe(value) == false)
            return "Date format dd/mm/yyyy required";
        else if (value.length < 10)
            return "Minimum 10 characters are required";
        else if (validateLength(value, 10) == false)
            return "Date can contain 10 characters maximum";
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (dateLessThanToday(value) == false)
            return "Date must be less than or equal to today's date";

        else if (document.getElementById('dob_id') != undefined) {
            if ((compareDates(value, $('#dob_id').val())) == false) {
                return "Must be greater or equal to Date Of Birth "+ $('#dob_id').val();
            }
        }
    }
    return "true";
}


function validate_passport_Expiry_Date(passExpiryDate,journeyDate,visa_type_id,requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && passExpiryDate.length >= 1)) {
        if (required(passExpiryDate) == false)
            return "Passport expiry date is required";
        else if (checkForOldIe(passExpiryDate) == false)
            return "Invalid date format";
        else if (myDate(passExpiryDate) == false)
        {
            return "Date format dd/mm/yyyy required";
        }
        else if (checkDate(passExpiryDate) == false)
            return "Invalid Date";
        else if (dateGreaterThanorEqualsToday(passExpiryDate)== false)
            return "Passport expiry date must be greater than or equal to today's date.";
        else if ((visa_type_id == 3 || visa_type_id == "3") && compare_two_dates_diff(passExpiryDate,journeyDate,179) == false) {
            return "Your passpot validity is less than 6 months from the date of proposed journey.";
        }else if ((visa_type_id == 1 || visa_type_id == "1") && compare_two_dates_diff(passExpiryDate,journeyDate,-1) == false) {
            return "Date of Expiry Cannot be Less Than Expected Date of Arrival.";
        }
        else if ((visa_type_id == 1 || visa_type_id == "1") && dateGreaterThanYdays(($('#passport_expiry_date').val()), 180) == false) {
            alert("Your passpot validity is less than 6 months.Your application may be rejected.");
        }
    }
    return "true";
}


function validate_visaIssueDate(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (required(value) == false)
            return "Visa issue date is required";
        else if (checkForOldIe(value) == false)
            return "Date format dd/mm/yyyy required";
        else if (value.length < 10)
            return "Minimum 10 characters are required";
        else if (validateLength(value, 10) == false)
            return "Date can contain 10 characters maximum";
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (dateLessThanToday(value) == false)
            return "Date must be less than or equal to today's date";

        else if (document.getElementById('dob') != undefined && $('#dob').val().length == 10) {
            if ((compareDates(value, $('#dob').val())) == false) {
                return "Must be greater or equal to Date Of Birth";
            }
        }
    }
    return "true";
}

function validate_visaExpiryDate(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (required(value) == false)
            return "Visa expiry date is required";
        else if (checkForOldIe(value) == false)
            return "Invalid date format";

        else if (myDate(value) == false)
        {
            return "Date format dd/mm/yyyy required";
        }
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (dateGreaterThanorEqualsToday(value)== false)
            return "Date must be greater than or equal to today's date.";
        else if ($('#VTissuedt').val().length == 10) {
            if ((compareDates(value, $('#VTissuedt').val())) == false) {
                return "Must be greater or equal to visa issue date";
            }
        }
    }
    return "true";
}


function validate_arrival_date(value) {
    value = value.replace(/^\s+|\s+$/gm, '');//trim
    if (required(value) == false)
        return "Expected arrival date is required";
    else if (checkForOldIe(value) == false)
        return "Date format dd/mm/yyyy required";
    else if (value.length < 10)
        return "Minimum 10 characters are required";
    else if (validateLength(value, 10) == false)
        return "Date can contain 10 characters maximum";
    else if (checkDate(value) == false)
        return "Invalid Date";

    else if (dateLessThanToday(value) == false)
        return "Date must be less than or equal to today's date"
    /* add the necessary validations here */

    return "true";
}





function validate_passportISsuePlace(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Passport Issue place is required";
        else if (value.length == 1)
            return "Minimum 2 characters are required";
        else if (value.length > 50)
            return "Minimum 50 characters allowed";
        // if(nameRegexWithSpace(value)==false)
        else if (alphabetSpaceNumberRegex(value) == false)
            return "Enter Alphabets Number or spaces Only";
    }
    return "true";
}


//validate_birthPlace
function validate_birthPlace(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Place of Birth is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 50) == false)
            return "Birth Place can contain 50 characters maximum";

        else if (birthPlaceRegex(value) == false)
            return "Enter Character Spaces Numbers or -  Only";
    }

    return "true";
}

function validate_Country(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Country is  required";
        else if (value.length > 4)
            return "Invalid length";
    }
    return "true";
}


function validate_Nationality(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Nationality is  required";
        else if (value.length < 1)
            return "Nationality is required";
        else if (value.length > 4)
            return "Invalid length";
    }
    return "true";
}

function validate_other_passport_issue_country(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Country is required";
        else if (value.length < 1)
            return "Country is required";
        else if (value.length > 4)
            return "Invalid length";
    }
    return "true";
}

function validate_Gender(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 && required(value) == false)
        return "Gender is  required";

    return "true";
}



function validate_Occupation(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Occupation is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 30) == false)
            return "Occupation can contain 30 characters maximum";
        else if (addressRegex(value) == false)
            return "Enter alphabets or spaces Only";
    }
    return "true";
}

function validate_Occupation_Details(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Occupation detail is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 30) == false)
            return "Occupation detail can contain 30 characters maximum";
        else if (addressRegex(value) == false)
            return "Enter alphabets or spaces Only";
    }
    return "true";
}

function validate_nationality_Acquisition(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Nationality Acquisition method is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 20) == false)
            return "Maximum 20 characters";
        else if (nameRegexWithSpace(value) == false)
            return "Invalid Characters";
    }
    return "true";
}

function validate_VisibleMark(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false) {
            //alert("inside ")  ;
            return "Visible mark is required";
        }

        else if (value.length >= 1) {
            if (value.length < 2)
                return "Minimum 2 characters are required";
            else if (validateLength(value, 35) == false)
                return "Visible mark can contain maximum 35 characters";
            else if (nameRegexWithSpace(value) == false)
                return "Visible mark  can contain characters or spaces Only";
        }
    }

    return "true";

}

function validate_surname(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Surname is required";
        //It has decided that surname will contain one character also...
        else if (value.length >= 0 && nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
        else if (value.length > 50)
            return "Surname can contain maximum 50 characters";
    }
    return "true";
}

function nameRegexWithSpace(value) {

    var result = value.match(/^[a-zA-Z\s]+$/);

    if (result == null)
        return false;
    else
        return true;
}

function alphabetRegex(value) {

    var result = value.match(/^[a-zA-Z]+$/);

    if (result == null)
        return false;
    else
        return true;
}

function numberRegex(value) {

    var result = value.match(/^[0-9+-]+$/);

    if (result == null)
        return false;
    else
        return true;
}

function IntRegex(value) {

    var result = value.match(/^[0-9]+$/);

    if (result == null)
        return false;
    else
        return true;
}
function alphabet_comma_regex(value) {

    var result = value.match(/^[0-9a-zA-Z,\s]+$/);

    if (result == null)
        return false;
    else
        return true;
}


function alphabetNumberRegex(value) {

    var result = value.match(/^[a-zA-Z0-9]+$/);
    if (result == null)
        return false;
    else
        return true;
}

function alphabetSpaceNumberRegex(value) {

    var result = value.match(/^[a-zA-Z0-9\s]+$/);
    if (result == null)
        return false;
    else
        return true;
}

function validate_presAdd1(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "House No./Street is required.";
        else if (value.length >= 1) {
            if (value.length == 1) {
                return "Minimum 2 characters required.";
            }
            else if (validateLength(value, 35) == false)
                return "Address can contain maximum 35 characters";
            else if (addressRegex(value) == false)
                return "Address can contain characters numbers spaces ,/()#.-& Only";
        }
    }
    return "true";
}

function validate_presAdd2(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {

        if (required(value) == false)
            return "Village/Town/City is required";
        if (value.length >= 1) {
            if (validateLength(value, 35) == false)
                return "Address can contain maximum 35 characters";
            if (addressRegex(value) == false)
                return "Address can contain characters numbers spaces ,/()#.-& Only";
        }
    }
    return "true";
}
function validate_organization(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {

        if (required(value) == false)
            return "Please fill the field.";
        else if (value.length >= 1) {
            if (validateLength(value, 50) == false)
                return "Maximum 50 characters";
            else if (alphabetSpaceNumberRegex(value) == false)
                return "Invalid Characters";
        }
    }
    return "true";
}

function validate_pincode(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Pincode is required";
        if (value.length >= 1) {
            if (validateLength(value, 15) == false)
                return "Pincode can contain maximum 15 characters";
            if (alphabetSpaceNumberRegex(value) == false)
                return "Pincode can contain characters numbers spaces only";
        }
    }
    return "true";
}

function validate_ind_pincode(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Pincode is required";
        if (value.length >= 1) {
            //if (validateLength(value, 6) == false)
            if(value.length != 6)
                return "Pincode can contain 6 digits only";
            if (IntRegex(value) == false)
                return "Pincode can contain numbers only";
        }
    }
    return "true";
}

function validate_employer_department(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Department is required";
        else if (value.length >= 1) {
            if (validateLength(value, 50) == false)
                return "Maximum 50 characters";
            else if (alphabetSpaceNumberRegex(value) == false)
                return "Department can contain characters numbers spaces only";
        }
    }
    return "true";
}

function validate_employer_salary(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Salary is required";
        else if (value.length >= 1) {
            if (validateLength(value, 10) == false)
                return "Maximum 10 characters";
            else if (numberRegex(value) == false)
                return "Salary can contain numbers only";
        }
    }
    return "true";
}

function validate_visited_city(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (value.length == 0)
            return "Visited city name is required";

        else if (value.length >= 1) {
            if (validateLength(value, 75) == false)
                return "Maximum 75 characters allowed";
            else if (alphabet_comma_regex(value) == false)
                return "Invalid characters.";
        }
    }
    return "true";
}

function validate_presAdd3(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (value.length >= 1) {
            if (validateLength(value, 35) == false)
                return "Address can contain maximum 35 characters";
            else if (addressRegex(value) == false)
                return "Address can contain characters numbers spaces ,/()#.-& Only";
        } else {
            return "State/Province/District is required";
        }
    }
    return "true";

}

function validate_mobile(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Mobile number is required";
        else if (value.length >= 1) {
            if (validateLength(value, 15) == false)
                return "Mobile No. can contain maximum 15 characters";
            else if (mobileRegex(value) == false)
                return "Mobile No. can contain numbers ()+- and space only";
        }
        if (value.length < 6)
            return "Minimum 6 digits are required";
    }
    return "true";
}

function validate_mobile_new(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Mobile number is required";
        else if (value.length >= 1) {
            if (value.length < 6)
                return "Minimum 6 digits are required";
            else if (validateLength(value, 15) == false)
                return "Mobile No. can contain maximum 15 characters";
            else if (mobileRegex_new(value) == false)
                return "Mobile number should contain numbers only.";
        }
    }
    return "true";
}


function validate_phone(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false && $('#mobile').val() == "")
            return "Phone number is required";
        if (value.length >= 1) {
            if (validateLength(value, 15) == false)
                return "Phone No. can contain maximum 15 characters";
            if (mobileRegex(value) == false)
                return "Phone No. can contain numbers ()+- and space only";
        }
        if (value.length < 6)
            return "Minimum 6 digits are required";
    }
    return "true";

}

function validate_givenName(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Given name is required";
        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
        else if (value.length < 2)
            return "Minimum 2 characters are required";

        else if (validateLength(value, 50) == false)
            return "Given name can contain 50 characters maximum";
        else{
            var temp=new Array();
            temp=value.split(' ');
            var firstname=temp[0];
            var middlename=temp[1];
            var k=firstname.length;
            firstname=firstname.toUpperCase();
            if(middlename!=null)
            {
                if(firstname=='MR' || firstname=='MRS' || firstname=='SMT'|| firstname=='DR'|| firstname=='MISS' ||  firstname=='MS'){
                    return "Please enter Applicant's  Surname without using Abbreviation like MR,DR,MRS,MISS";
                }
            }
        }
    }
    
    return "true";
}

function validate_religion(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Religion is required";
        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
        else if (value.length < 2)
            return "Minimum 2 characters are required";

        else if (validateLength(value, 20) == false)
            return "Religion can contain 20 characters maximum";
    }
    return "true";
}

function validate_employerName(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Employer name is required";
        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
        else if (value.length < 2)
            return "Minimum 2 characters are required";

        else if (validateLength(value, 50) == false)
            return "Employer name can contain 50 characters maximum";
    }
    return "true";
}
function validate_employerDesignation(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Employer designation is required";
        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
        else if (value.length < 2)
            return "Minimum 2 characters are required";

        else if (validateLength(value, 50) == false)
            return "Employer designation can contain 50 characters maximum";
    }
    return "true";
}

function validate_EmployerAddress1(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Employer Address is required";
        else if (value.length == 1)
            return "Atleast 2 characters are required";
        else if (validateLength(value, 50) == false)
            return "Address can contain maximum 50 characters";
        else if (addressRegexWithNumber(value) == false)
            return "Enter Alphanumeric characters / # ,or - Only";
    }
    return "true";

}

/*
 function validate_VisibleMark(value) {
 if (required(value) == false)
 return "Visible mark is required";
 if (value.length >= 1) {
 if (value.length < 2)
 return "Minimum 2 characters are required";
 else if (validateLength(value, 35) == false)
 return "Visible mark can contain maximum 35 characters";
 else if (nameRegexWithSpace(value) == false)
 return "Visible mark  can contain characters or spaces Only";
 }
 
 return "true";
 
 }*/

function validate_Education(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Education qualification is required";
        else if (value.length >= 1) {
            if (value.length < 2)
                return "Minimum 2 characters are required";
            else if (validateLength(value, 20) == false)
                return "Maximum 20 characters";
            else if (nameRegexWithSpace(value) == false)
                return "Enter alphabet or spaces Only";
        }
    }

    return "true";

}



function validate_motherName(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Mother's name is required";

        else if (validateLength(value, 50) == false)
            return "Mother's name can contain 50 characters maximum";

        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";

        else if (value.length < 2)
            return "Minimum 2 characters are required";
    }
    return "true";

}
function validate_fatherName(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Father's name is required";

        else if (validateLength(value, 50) == false)
            return "Father's name can contain 50 characters maximum";

        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";

        else if (value.length < 2)
            return "Minimum 2 characters are required";
    }
    return "true";

}

function validate_spouseName(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Spouse's name is required";

        else if (validateLength(value, 50) == false)
            return "Spouse's name can contain 50 characters maximum";

        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";

        else if (value.length < 2)
            return "Minimum 2 characters are required";
    }
    return "true";

}


function validate_dob(value, requiredOrNot) {

    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (requiredOrNot == 1 && required(value) == false)
            return "Date of Birth is required";
        else if (checkForOldIe(value) == false) {

            return "Please enter a date in the format dd/mm/yyyy";
        }

        else if (myDate(value) == false)
        {
            return "Please enter a date in the format dd/mm/yyyy";
        }

        else if (checkDate(value) == false)
            return "Invalid Date";

        else if (dateLessThanToday(value) == false)
            return "Date must be less than or equal to today's date"
    }
    return "true";
}


function validate_journeydate(value, requiredOrNot, visa_type_id) {
    requiredOrNot = parseInt(requiredOrNot);
    //visa_type_id = parseInt(visa_type_id);

    if ((requiredOrNot == 1 || requiredOrNot == "1") || ((requiredOrNot == 0 || requiredOrNot == "0") && value.length >= 1)) {

        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (requiredOrNot == 1 && required(value) == false)
            return "Journey Date is required";
        else if (checkForOldIe(value) == false) {
            return "Please enter a date in the format dd/mm/yyyy";
        }
        else if (myDate(value) == false)
        {
            return "Please enter a date in the format dd/mm/yyyy";
        }
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (visa_type_id == 1 && dateGreaterThanorEqualsToday(value) == false) {

            return "Date of Journey should be greater than or equals to today's date";
        }
        else if ((visa_type_id == 3 || visa_type_id == "3") && dateGreaterThanYdays(value, 4) == false) {
            return "Date of Journey should be greater than 4 days from Today's Date";
        }

        else if ((visa_type_id == 3 || visa_type_id == "3") && dateLessThanYdays(value, 124) == false)
        {
            return "Date of Journey should not be greater than 124 days from Today's Date";
        }

    }
    return "true";
}

function checkDate(value) {

    return isDate(value);

}
function myDate(value) {

    var result = value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    //var result= value.match(/^\d\d?\/[A-Z][A-Z][A-Z]\/\d\d\d\d$/i);
    //var result=value.match(/^\d\d?/[a-zA-Z]3/\d\d\d\d$/);

    if (result == null)
        return false;
    else
        return true;

}

function birthPlaceRegex(value) {
    var result = value.match(/^[a-zA-Z0-9\s-, ]+$/);
    if (result == null)
        return false;
    else
        return true;
}

function dateLessThanToday(value) {
    var todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    //convert value into date object
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(n[2], n[1], n[0]);
    enteredDate.setHours(0, 0, 0, 0);
    if (dates.compare(enteredDate, todayDate) == 1)
        return false;
    else
        return true;
}

function dateGreaterThanorEqualsToday(value) {
    var todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    //convert value into date object
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(n[2], n[1], n[0]);
    enteredDate.setHours(0, 0, 0, 0);
    if (dates.compare(enteredDate, todayDate) == 1 || dates.compare(enteredDate, todayDate) == 0)
    {
        return true;
    }
    else
        return false;
}

function dateLessThanSixMonths(value, visa_type) {
    var todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    //convert value into date object
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(n[2], n[1], n[0]);
    enteredDate.setHours(0, 0, 0, 0);
    if (dates.compare(enteredDate, todayDate) == 1 || dates.compare(enteredDate, todayDate) == 0)
        return true;
    else
        return false;
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

function dateLessThanYdays(value, y) {
    var yDate = new Date();
    yDate = yDate.addDays(y);
    yDate.setHours(0, 0, 0, 0);
    //convert value into date object
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(n[2], n[1], n[0]);
    enteredDate.setHours(0, 0, 0, 0);
    if (dates.compare(enteredDate, yDate) == -1 || dates.compare(enteredDate, yDate) == 0)//entered date less than or equals to 
        return true;
    else
        return false;
}

function dateGreaterThanYdays(value, y) {
    var yDate = new Date();
    yDate = yDate.addDays(y);
    yDate.setHours(0, 0, 0, 0);
    //convert value into date object
    var actualDate = new Date();
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(n[2], n[1], n[0]);
    enteredDate.setHours(0, 0, 0, 0);

    if (dates.compare(enteredDate, yDate) == 1 || dates.compare(enteredDate, yDate) == 0) //entered date is greater than or EQUALS ydate
        return true;
    else
        return false;
}

function isDate(txtDate, separator) {

    var aoDate, // needed for creating array and object
    ms, // date in milliseconds
    month, day, year; // (integer) month, day and year
    // if separator is not defined then set '/'
    if (separator == undefined) {
        separator = '/';
    }
    // split input date to month, day and year
    aoDate = txtDate.split(separator);
    // array length should be exactly 3 (no more no less)
    if (aoDate.length !== 3) {
        return false;
    }
    // define month, day and year from array (expected format is m/d/yyyy)    
    //month = aoDate[1] - 1; // because months in JS start from 0    
    day = aoDate[0] - 0;
    month = aoDate[1] - 1;
    year = aoDate[2] - 0;



    // test year range
    if (year < 1900 || year > 2200) {
        return false;
    }
    // convert input date to milliseconds
    ms = (new Date(year, month, day)).getTime();
    // initialize Date() object from milliseconds (reuse aoDate variable)
    aoDate = new Date();

    aoDate.setTime(ms);

    // compare input date and parts from Date() object
    // if difference exists then input date is not valid
    if (aoDate.getFullYear() !== year ||
        aoDate.getMonth() !== month ||
        aoDate.getDate() !== day) {
        return false;
    }
    // date is OK, return true
    return true;
}
function checkForOldIe(value) {

    if (value == "" || value == '' || value.length == 0) {
        return false;
    }
    var value1 = value;
    value1 = value1.replace("-", "/");
    value1 = value1.replace("\\", "/");
    value1 = value1.replace(".", "/");
    value1 = value1.replace("#", "/");
    //value1=value1.toLowerCase();
    var subParts = value1.split('/');


    if (subParts.length != 3)
        return false;
    else
        return true;

}

var dates = {
    convert: function(d) {

        return (
            d.constructor == Date ? d :
            d.constructor == Array ? new Date(d[0], d[1], d[2]) :
            d.constructor == Number ? new Date(d) :
            d.constructor == String ? new Date(d) :
            typeof d == "object" ? new Date(d.year, d.month, d.date) :
            NaN
            );
    },
    compare: function(a, b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        a.setHours(0, 0, 0, 0);
        b.setHours(0, 0, 0, 0);
        return (
            isFinite(a = this.convert(a).valueOf()) &&
            isFinite(b = this.convert(b).valueOf()) ?
            (a > b) - (a < b) :
            NaN
            );
    //isFinite(a=this.convert(a).valueOf()) &&  isFinite(b=this.convert(b).valueOf()) ? (a>b)-(a<b) :NaN );
    },
    inRange: function(d, start, end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(d = this.convert(d).valueOf()) &&
            isFinite(start = this.convert(start).valueOf()) &&
            isFinite(end = this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
            );
    }
}


function IntegerRegex(value) {

    var result = value.match(/^[0-9]+$/);
    if (result == null)
        return false;
    else
        return true;
}

function FloatRegex(value) {

    var result = value.match(/^[0-9.+-]+$/);
    if (result == null)
        return false;
    else
        return true;
}


function mobileRegex(value) {

    var result = value.match(/^[0-9()+\-\s]+$/);
    if (result == null)
        return false;
    else
        return true;
}

function websiteRegex(value) {
    value = value + "";

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (value.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function mobileRegex_new(value) {

    //var result = value.match(/^[0-9()+\-\s]+$/);
    // new added on 14-dec-2016 for family details mobile no only...
    var result=value.match(/^\+?[0-9]+$/);
    if (result == null)
        return false;
    else
        return true;
}


function addressRegexWithNumber(value) {

    var result = value.match(/^[0-9a-zA-Z-\s/,#]+$/);

    if (result == null)
        return false;
    else
        return true;
}


function zeroRegex(value) {

    var result = value.match(/^[0]+$/);

    if (result == null)
        return false;
    else
        return true;
}


function compareDates(value, params) {

    //returns false if value is < params
    var n = value.split("/");

    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var enteredDate = new Date(parseInt(n[2]), parseInt(n[1]), parseInt(n[0]));
    enteredDate.setHours(0, 0, 0, 0);
    var x = params.split("/");
    if (x[0].substring(0, 1) == "0") {
        x[0] = x[0].substring(1, 2);
    }
    x[1] = x[1] - 1;
    var d2 = new Date(parseInt(x[2]), parseInt(x[1]), parseInt(x[0]));
    var paramDate = new Date(d2);
    paramDate.setHours(0, 0, 0, 0);
    if (dates.compare(enteredDate, paramDate) == -1)
        return false;
    else
        return true;
}

function addressRegex(value) {
    //,/()#.-&
    var result = value.match(/^[0-9.\-,/#:&()a-zA-Z\s/]+$/);
    if (result == null)
        return false;
    else
        return true;
}
function address_phono_noRegex(value) {
    //,/()#.-&
    var result = value.match(/^(?=.*[0-9]{9,15})(?=.*[a-zA-Z]{2,})[0-9.\-,/#:&()a-zA-Z\s/]+$/);
    if (result == null)
        return false;
    else
        return true;
}



function errorify_tab(id) {
    id.parent().css('background', '#DD4646');

}


function correctify_tab(id) {
    id.parent().css('background', '#A6F495');
}





function changeDate(value) {

    var x = value;
    var n = x.replace(/(\.|\\|\/|\-)+/g, "/");
    value = n;
    x = n;
    var newValue = x.split("/");
    if (newValue.length == 3) {
        newValue[0] = newValue[0].replace(/^[0-9]{1}$/, "0" + newValue[0]);
        newValue[1] = newValue[1].replace(/^(01|1|001|Jan|January)$/i, "01");
        newValue[1] = newValue[1].replace(/^(02|2|002|Feb|February)$/i, "02");
        newValue[1] = newValue[1].replace(/^(03|3|003|Mar|march)$/i, "03");
        newValue[1] = newValue[1].replace(/^(04|4|004|Apr|april)$/i, "04");
        newValue[1] = newValue[1].replace(/^(05|5|005|May)$/i, "05");
        newValue[1] = newValue[1].replace(/^(06|6|006|Jun|june)$/i, "06");
        newValue[1] = newValue[1].replace(/^(07|7|007|Jul|July)$/i, "07");
        newValue[1] = newValue[1].replace(/^(08|8|008|Aug|august)$/i, "08");
        newValue[1] = newValue[1].replace(/^(09|9|009|Sep|Sept|September)$/i, "09");
        newValue[1] = newValue[1].replace(/^(10|010|Oct|october)$/i, "10");
        newValue[1] = newValue[1].replace(/^(11|011|Nov|november)$/i, "11");
        newValue[1] = newValue[1].replace(/^(12|012|Dec|december)$/i, "12");
        newValue[2] = newValue[2].replace(/^[0-9]{1}$/, "200" + newValue[2]);
        newValue[2] = newValue[2].replace(/^[0-9]{2}$/, "19" + newValue[2]);
        //var result=newValue[0].match(/^[0-9]{1}$/);
        //$('#myField').val(newValue[0]+"/"+newValue[1]+"/"+newValue[2]);
        value = newValue[0] + "/" + newValue[1] + "/" + newValue[2];
    }

    return value;
}

function validate_MaritalStatus(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Marital Status is required";
        else if (value.length != 1)
            return "Invalid";
    }
    return "true";
}
function validate_occ_flag(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Please select a value.";
    // if (value.length!=1)
    //   return "Invalid";
    }
    return "true";
}


function validate_passportDateIssue(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {

        if (required(value) == false)
            return "Passport issue date is required";
        else if (checkForOldIe(value) == false)
            return "Please enter a date in the format dd/mm/yyyy";
        else if (value.length < 10)
            return "Minimum 10 characters are required";
        else if (validateLength(value, 10) == false)
            return "Passport No. can contain 10 characters maximum";
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (dateLessThanToday(value) == false)
            return "Date must be less than or equal to today's date"
        else if (document.getElementById('dob_id') != undefined) {
            if ((compareDates(value, $('#dob_id').val())) == false) {
                return "Must be greater or equal to Date Of Birth";
            }
        }
    }
    return "true";


}
function validate_migrationDate(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {

        if (required(value) == false)
            return "Migration date is required";
        else if (checkForOldIe(value) == false)
            return "Please enter a date in the format dd/mm/yyyy";
        else if (value.length < 10)
            return "Minimum 10 characters are required";
        else if (validateLength(value, 10) == false)
            return "Migration date can contain 10 characters maximum";
        else if (checkDate(value) == false)
            return "Invalid Date";
        else if (dateLessThanToday(value) == false)
            return "Date must be less than or equal to today's date"
        else if (document.getElementById('dob_id') != undefined) {
            if ((compareDates(value, $('#dob_id').val())) == false) {
                return "Must be greater or equal to Date Of Birth - "+ $('#dob_id').val();
            }
        }
        if ((compareDates(value,"01/03/1947")) == false) {
            return "Must be greater or equal to 01/03/1947";
        }
    }
    return "true";


}


function validate_country(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Country is  required";
    }
    return "true";
}

function validate_missionCode(value) {

    if (required(value) == false)
    {
        return "Please select Indian Port";
    }
    if (value.length > 4)
        return "Invalid length";
    return "true";
}
function validate_missionCode_reprint(value) {

    if (required(value) == false)
    {
        return "Please select Indian Port";
    }
    if (value.length > 5)
        return "Invalid length";
    return "true";
}


function validate_ppt_type_id(value) {

    if (required(value) == false)
    {
        return "Please select Passport Type";
    }

    return "true";
}

function validate_visa_service(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
        {
            return "Please select Visa Service";
        }
        if (numberRegex(value) == false)
            return "Invalid visa service";

    }
    return "true";
}

function validate_captcha(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (value.length == 0)
            return "Please enter captcha";

        else if (validateLength(value, 15) == false)
            return "Captcha Place can contain 15 characters maximum";

        else if (alphabetNumberRegex(value) == false)
            return "Enter valid characters";
    }
    return "true";
}

function validate_placeOfBirth(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Place of Birth is required";
        else if (value.length < 2)
            return "Minimum 2 characters are required";
        else if (validateLength(value, 50) == false)
            return "Birth Place can contain 50 characters maximum";

        else if (birthPlaceRegex(value) == false)
            return "Enter Character Spaces Numbers or -  Only";
    }
    return "true";
}

function validate_filenumber(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Application Id is required";
        else if (value.length != 12)
            return "Invalid length";

        else if (alphabetNumberRegex(value) == false)
            return "Invalid Characters";
    }
    return "true";
}

function validate_temp_filenumber(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Temp Application Id is required";
        else if (value.length != 15)
            return "Invalid length";

        else if (alphabetNumberRegex(value) == false)
            return "Invalid Characters";
    }
    return "true";
}


function validate_ivrkey(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Invalid IVR key";
        else if (value.length < 3)
            return "Invalid length";

        else if (alphabetNumberRegex(value) == false)
            return "Invalid Characters";
    }
    return "true";
}


function validate_Country_of_birth(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (value != undefined) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Country of birth is  required";
        else if (value.length > 4)
            return "Invalid length";
    }


    return "true";
}



function validate_email(value, requiredOrNot, visa_type_id) {
    if (visa_type_id == 3) {
        requiredOrNot = 1;
    } else {
        requiredOrNot = 0;
    }
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 && value.length == 0) {
        return "Email-id is required";
    }
    else if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (validateLength(value, 50) == false)
            return "Maximum 50 characters";
        else if (emailRegex(value) == false)
            return "Invalid email-Id";
    }
    return "true";

}
function validate_grandParentFlagDetails(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Details required";

        else if (validateLength(value, 75) == false)
            return "Details contain 75 characters maximum";

        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";

        else if (value.length < 2)
            return "Minimum 2 characters are required";
    }
    return "true";

}

function validate_generic_alpha_sp(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (value.length == 0)
            return "Details required";

        else if (validateLength(value, maxlength) == false)
            return "Details contain " + maxlength + " characters maximum";

        else if (nameRegexWithSpace(value) == false)
            return "Enter Alphabets or spaces Only";
    }
    return "true";
}

function validate_website(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (value.length == 0)
            return "Website required";

        else if (validateLength(value, maxlength) == false)
            return "Maximum" + maxlength + " characters are allowed";

        else if (websiteRegex(value) == false)
            return "Invalid website url";
    }
    return "true";
//websiteRegex
}

function validate_generic_address(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Address required";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}
function validate_generic_data(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Details required";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}

function validate_generic_address_phoneno(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Details required";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";

        else if (address_phono_noRegex(value) == false)
            return "Please enter phone number and address";

    }
    return "true";
}



function validate_generic_number(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false) {

            return "Mandatory field.";
        }
        else if (validateLength(value, maxlength) == false) {
            return "Maximum " + maxlength + " characters allowed";
        }
        else if (FloatRegex(value) == false) {
            return "Invalid Characters";
        }
    }
    return "true";
}

function validate_generic_alpha_num_sp(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Details required";

        else if (validateLength(value, maxlength) == false)
            return "Details contain " + maxlength + " characters maximum";

        else if (alphabetSpaceNumberRegex(value) == false)
            return "Invalid Characters";

    }
    return "true";
}

function validate_generic_alpha_num(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (required(value) == false)
            return "Details required";

        else if (validateLength(value, maxlength) == false)
            return "Details contain " + maxlength + " characters maximum";

        else if (alphabetNumberRegex(value) == false)
            return "Enter Alphabets or spaces Only";

    }
    return "true";
}

function show_hide_prev_surname() {

    if (document.getElementById('changedSurnameCheck').checked == true) {
        $('.prev_surname_class').css('display', 'block');
    } else {
        //empty all the fields
        $('.prev_surname_class').css('display', 'none');
        $('#prev_surname').val('');
        $('#prev_given_name').val('');
    }
}

function show_hide_any_other_passpport() {

    if (document.getElementById('other_ppt_1').checked == true) {
        $('.anyOtherNat').css('display', 'block');
        $('#other_ppt_country_issue').prop('disabled', false);
        $('#other_ppt_no').prop('disabled', false);
        $('#other_ppt_issue_date').prop('disabled', false);
        $('#other_ppt_issue_place').prop('disabled', false);
        $('#other_ppt_nat').prop('disabled', false);

    }
    else if (document.getElementById('other_ppt_2').checked == true) {
        $('.anyOtherNat').css('display', 'none');
        $('#other_ppt_country_issue').val('');
        correctify($('#other_ppt_country_issue'), '');
        $('#other_ppt_no').val('');
        correctify($('#other_ppt_no'), '');
        $('#other_ppt_issue_date').val('');
        correctify($('#other_ppt_issue_date'), '');
        $('#other_ppt_issue_place').val('');
        correctify($('#other_ppt_issue_place'), '');
        $('#other_ppt_nat').val('');
        correctify($('#other_ppt_nat'), '');
        $('#other_ppt_country_issue').prop('disabled', true);
        $('#other_ppt_no').prop('disabled', true);
        $('#other_ppt_issue_date').prop('disabled', true);
        $('#other_ppt_issue_place').prop('disabled', true);
        $('#other_ppt_nat').prop('disabled', true);
    }


}
function show_religion_other() {
    if ($('#religion').val().toUpperCase() == "OTHERS") {
        $('#religion_other').css('display', '');
        $('#religion_other').parent().next().empty().append("Please specify religion");
    } else {
        $('#religion_other').css('display', 'none');
        $('#religion_other').val('');
        $('#religion_other').parent().next().empty().append("If Others .Please specify");
    }
}

function showHideOccupationOth() {
    if ($('#occupation').val().toUpperCase() == "OTHERS") {
        $('#occupationOther').css('display', '');
        $('#occupationOther').parent().next().empty().append("Please specify occupation");
    } else {
        $('#occupationOther').css('display', 'none');
        $('#occupationOther').val('');
        $('#occupationOther').parent().next().empty().append("If Others .Please specify");
    }

    if ($('#occupation').val().toUpperCase() == "STUDENT" || $('#occupation').val().toUpperCase() == "HOUSE WIFE" || $('#occupation').val().toUpperCase() == "MINOR") {
        $('.occDetaisOf').css('display', 'block');
    }
    else {
        $('#occ_flag').val('');
        $('.occDetaisOf').css('display', 'none');
    }
}

function showHidePrevOccupationOth() {

    if ($('#previous_occupation').val().toUpperCase() == "OTHERS") {
        $('#previous_occupation_details').css('display', '');
        $('#previous_occupation_details').parent().next().empty().append("Please specify occupation");
    } else {
        $('#previous_occupation_details').css('display', 'none');
        $('#previous_occupation_details').val('');
        $('#previous_occupation_details').parent().next().empty().append("If Others .Please specify");
    }
}

//$("form input[type=submit]").click(function () {
//    $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
//    $(this).attr("clicked", "true");
//});

function copyAddress() {

    if (document.getElementById('sameAddress_id').checked == true) {
        $('#perm_address1').val($('#pres_add1').val());
        $('#perm_address2').val($('#pres_add2').val());
        $('#perm_address3').val($('#pres_add3').val());
    }
    else {
        $('#perm_address1').val('');
        $('#perm_address2').val('');
        $('#perm_address3').val('');
    }
}

function prev_visit_fn() {
    if (document.getElementById('old_visa_flag1').checked == true) {
        $('.prv_visit_details_row').css('display', 'block');
    }
    else if (document.getElementById('old_visa_flag2').checked == true) {
        $('.prv_visit_details_row').css('display', 'none');
        $('#prv_visit_add1').val('');
        $('#prv_visit_add2').val('');
        $('#prv_visit_add3').val('');
        $('#visited_city').val('');
        $('#old_visa_no').val('');
        $('#old_visa_type_id').val('');
        $('#oldvisaissueplace').val('');
        $('#oldvisaissuedate').val('');

    }
}

var saarc_row_count = 0;
function add_saarc_rows() {
    //all_saarc_rows

    if (document.getElementById('saarc_flag1').checked == true) {//YES
        $('.all_saarc_rows').css('display', 'block');
        if (saarc_row_count == 8) {
            alert("No more rows can be added");
        }
        else {
            saarc_row_count++;
            var t = "saarc_row" + saarc_row_count;
            $('#' + t).css('display', 'block');
            $('#saarcFieldsFilled').val(saarc_row_count);
        }
    } else if (document.getElementById('saarc_flag2').checked == true) { //NO

        $('.all_saarc_rows').css('display', 'none');
        $('.saarcCountry').val('');
        $('.saarcYear').val('');
        $('.saarcVisitNo').val('');
        //hide all the internal rows too        
        for (var i = 1; i <= saarc_row_count; i++) {
            var t2 = "saarc_row" + i;
            if (document.getElementById(t2) != undefined) {
                $('#' + t2).css('display', 'none');
            }
        }
        saarc_row_count = 0;
    }

}


function add_saarc_row_first() {
    //all_saarc_rows

    if (document.getElementById('saarc_flag1').checked == true) {//YES
        $('.all_saarc_rows').css('display', 'block');

        if (saarc_row_count == 0) {
            saarc_row_count++;
            var t = "saarc_row" + saarc_row_count;
            $('#' + t).css('display', 'block');
            $('#saarcFieldsFilled').val(saarc_row_count);
        }
    }

}

function set_saarc_row_count(value) {
    saarc_row_count = parseInt(value);
}
function get_saarc_row_count() {
    // alert("from get saarc row count im returning " + saarc_row_count);
    return saarc_row_count;
}
function delete_saarc_rows() {
    if (saarc_row_count > 1) {

        var t2 = "saarc_row" + saarc_row_count;
        if (document.getElementById(t2) != undefined) {

            $('#' + t2).css('display', 'none');
            --saarc_row_count;
            // $('#'+t2+".saarcCountry").val('');
            $('#' + t2).find('input:text').val('');
            $('#' + t2).find('select').val('');
        //$('#'+t2+".saarcYear").val('');
        //$('#'+t2+".saarcVisitNo").val('');
        }

    }
    else if (saarc_row_count == 1) {
        $('.all_saarc_rows').css('display', 'none');
        $('.saarcCountry').val('');
        $('.saarcYear').val('');
        $('.saarcVisitNo').val('');
        var t3 = "saarc_row" + saarc_row_count;
        if (document.getElementById(t3) != undefined) {
            $('#' + t3).css('display', 'none');
            --saarc_row_count;
            $('#' + t2).find('input:text').val('');
            $('#' + t2).find('select').val('');
        }
        document.getElementById('saarc_flag1').checked = false;
        document.getElementById('saarc_flag2').checked = true;
    }
    else if (saarc_row_count == 0) {
        alert("No more rows can be deleted.");
    }

}

function chkboxbefAftInd() {
    correctify($('#chkboxbefInd'), "");
    if (document.getElementById('chkboxbefInd').checked == true) {
        $('.beforeIndia').css('display', 'block');
    }
    else if (document.getElementById('chkboxbefInd').checked == false) {
        $('.beforeIndia').css('display', 'none');
        $('#befCntryName').val('');
        correctify($('#befCntryName'), "");
        $('#befVisaFlag').checked = false;
    }

    if (document.getElementById('chkboxAftInd').checked == true) {
        $('.afterIndia').css('display', 'block');
    }
    else if (document.getElementById('chkboxAftInd').checked == false) {
        $('.afterIndia').css('display', 'none');
        $('#aftCntryName').val('');
        correctify($('#aftCntryName'), "");
        $('#aftVisaFlag').checked = false;
    }
}

////pak details form validation ///
function validate_pov(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value + "";
        if (required(value) == false)
            return "Place of visit is required";
        else if (value.length > 50)
            return "Minimum 50 characters allowed";
        // if(nameRegexWithSpace(value)==false)
        else if (alphabetSpaceNumberRegex(value) == false)
            return "Enter Alphabets Number or spaces Only";
    }
    return "true";
}

function validate_pos(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value + "";
        if (required(value) == false)
            return "Place of stay is required";
        else if (value.length > 50)
            return "Minimum 50 characters allowed";
        // if(nameRegexWithSpace(value)==false)
        else if (alphabetSpaceNumberRegex(value) == false)
            return "Enter Alphabets Number or spaces Only";
    }
    return "true";
}

function add_pak_places1(visastr) {

    var pov1_total = $('#pov1_total').val();
    pov1_total = parseInt(pov1_total);
    var loopend = 0;
    if (visastr == "B" && pov1_total == 15) {
        alert("No more places can be added");
        return;
    }
    else if (visastr == "PL" && pov1_total == 10) {
        alert("No more places can be added");
        return;
    }
    else if (pov1_total == 8 && !(visastr == "B" || visastr == "PL")) {
        alert("No more places can be added");
        return;
    }
    else {
        var paddingchar = "";
        if (pov1_total <= 8) {
            paddingchar = '1';
            loopend = parseInt(pov1_total);
        }
        else if (pov1_total > 8 && pov1_total <= 16) {
            paddingchar = '2';
            loopend = parseInt(parseInt(pov1_total) - parseInt(8));
        }
        else {
            paddingchar = '3';
            loopend = parseInt(parseInt(pov1_total) - parseInt(16));
        }

        for (var i = 1; i <= parseInt(loopend); i++) {


            var result = validate_pov($('#pov' + paddingchar + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pov' + paddingchar + i), result);
                return;
            } else {
                correctify_same($('#pov' + paddingchar + i), "");
            }
            result = validate_pov($('#pov_state_id' + paddingchar + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pov_state_id' + paddingchar + i), result);
                return;
            } else {
                correctify_same($('#pov' + paddingchar + i), "");

            }

        }
        pov1_total = pov1_total + 1;
        $('#pov1_total').val(pov1_total);

        if (pov1_total <= 8) {
            paddingchar = '1';
            loopend = parseInt(pov1_total);
        }
        else if (pov1_total > 8 && pov1_total <= 16) {
            paddingchar = '2';
            loopend = parseInt(parseInt(pov1_total) - parseInt(8));
        }
        else {
            paddingchar = '3';
            loopend = parseInt(parseInt(pov1_total) - parseInt(16));
        }
        $('#V' + paddingchar + loopend).css('display', 'block');

    }
}

function delete_pak_places1() {
    var pov1_total = $('#pov1_total').val();
    pov1_total = parseInt(pov1_total);
    if (pov1_total == 1) {
        alert("No more places can be deleted");
        return;
    } else {
        var paddingchar = "";
        var loopend = 0;
        if (pov1_total <= 8) {
            paddingchar = '1';
            loopend = parseInt(pov1_total);
        }
        else if (pov1_total > 8 && pov1_total <= 16) {
            paddingchar = '2';
            loopend = parseInt(parseInt(pov1_total) - parseInt(8));
        }
        else {
            paddingchar = '3';
            loopend = parseInt(parseInt(pov1_total) - parseInt(16));
        }
        $('#pov' + paddingchar + loopend).val('');
        $('#pov_state_id' + paddingchar + loopend).val('');
        $('#V' + paddingchar + loopend).css('display', 'none');//change to none

        //$('#V1' + pov1_total).css('display', 'none');
        //$('#pov1' + pov1_total).val('');
        // $('#pov_state_id1' + pov1_total).val('');
        pov1_total = pov1_total - 1;
        $('#pov1_total').val(pov1_total);

    }
}
//
function populate_rel_state() {

    var options = "";
    var already = new Array();
    var already_count = 0;
    var tt = "<option value=''>Select.. </option>";
    for (var i = 1; i <= 8; i++) {
        $("#pov_state_id1" + i + " option:selected").each(function()
        {
            if ($(this).val() != '' && $.inArray($(this).val(), already) == -1) {
                already[already_count++] = $(this).val();
                tt = tt + "<option value='" + $(this).val() + "'>" + $(this).val() + "</option>";
            }
        });
    }

    for (var j = 1; j <= 8; j++) {
        $("#pov_state_id2" + j + " option:selected").each(function()
        {
            if ($(this).val() != '' && $.inArray($(this).val(), already) == -1) {
                already[already_count++] = $(this).val();
                tt = tt + "<option value='" + $(this).val() + "'>" + $(this).val() + "</option>";
            }
        });
    }

    for (var i = 1; i <= 8; i++) {
        //ap.pos_state_id1
        //relative_state_id11

        var relative_state_old_value = $('#relative_state_id1' + i).val();
        var pos_state_old_value = $('#pos_state_id' + i).val();

        $("#pos_state_id" + i).prop('disabled', false);
        $("#relative_state_id1" + i).prop('disabled', false);
        $("#relative_state_id1" + i).html(tt);
        $("#pos_state_id" + i).html(tt);

        //now preseect relative_state_old_value in relative_state_id
        $("#relative_state_id1" + i).val(relative_state_old_value);
        $("#pos_state_id" + i).val(pos_state_old_value);

    }

//  var txt = $("#ddlViewBy option:selected").text();
//  var val = $("#ddlViewBy option:selected").val();
}

//function add_relative() {
//    if ($('#relative_total').val() == 8) {
//        alert("No more relative can be added");
//    }
//    else {
//        var rel_total = $('#relative_total').val();
//        rel_total = parseInt(rel_total);
//        rel_total = rel_total + 1;
//        $('#R1' + rel_total).css('display', 'block');
//        $('#relative_total').val(rel_total);
//    }
//}

function add_relative() {
    var relative_total = $('#relative_total').val();
    relative_total = parseInt(relative_total);
    if (relative_total == 8) {
        alert("No more relatives can be added");
    }
    else {
        for (var i = 1; i <= relative_total; i++)
        {
            var result = validate_generic_alpha_sp($('#relative_name1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relative_name1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_name1' + i), "");
            }

            result = validate_generic_alpha_sp($('#relation1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relation1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relation1' + i), "");
            }

            result = validate_generic_address($('#relative_address1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relative_address1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_address1' + i), "");
            }

            result = validate_generic_address($('#relative_place1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relative_place1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_place1' + i), "");
            }

            result = validate_generic_alpha_num_sp($('#relative_state_id1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relative_state_id1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_state_id1' + i), "");
            }

            result = validate_generic_alpha_num_sp($('#relative_dist_id1' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#relative_dist_id1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_dist_id1' + i), "");
            }

            result = validate_ind_pincode($('#relative_pin_code1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_pin_code1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_pin_code1' + i), "");
            }

            result = validate_phone($('#relative_phone1' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#relative_phone1' + i), result);
                return;
            }
            else
            {
                correctify_same($('#relative_phone1' + i), "");
            }

        }

        relative_total = relative_total + 1;
        $('#R1' + relative_total).css('display', 'block');
        $('#relative_total').val(relative_total);
    }
}

function delete_relative() {
    if ($('#relative_total').val() == 1) {
        alert("No more relative can be deleted");
    }
    else {
        var rel_total = $('#relative_total').val();
        rel_total = parseInt(rel_total);
        $('#R1' + rel_total).css('display', 'none');
        $('#relative_name1' + rel_total).val('');
        $('#relative_place1' + rel_total).val('');
        $('#relative_state_id1' + rel_total).val('');
        $('#relative_district_id1' + rel_total).val('');
        $('#relative_pin_code1' + rel_total).val('');
        $('#relative_phone1' + rel_total).val('');
        rel_total = rel_total - 1;
        $('#relative_total').val(rel_total);
    }

}

//function add_place_of_stay() {
//    if ($('#pos_total').val() == 8) {
//        alert("No more places can be added");
//    }
//    else {
//        var pos_total = $('#pos_total').val();
//        pos_total = parseInt(pos_total);
//        pos_total = pos_total + 1;
//        $('#A' + pos_total).css('display', 'block');
//        $('#pos_total').val(pos_total);
//    }
//
//}

function add_place_of_stay() {
    var pos_total = $('#pos_total').val();
    pos_total = parseInt(pos_total);
    if (pos_total == 8) {
        alert("No more places can be added");
        return;
    }
    else {
        for (var i = 1; i <= parseInt(pos_total); i++) {
            var result = validate_pos($('#place_of_stay' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                return;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
            result = validate_generic_alpha_sp($('#pos_address' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                return;
            } else {
                correctify_same($('#pos_address' + i), "");
            }
            result = validate_generic_alpha_sp($('#pos_state_id' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                return;
            } else {
                correctify_same($('#pos_state_id' + i), "");
            }
            result = validate_generic_alpha_sp($('#pos_dist_id' + i).val(), 1,50);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                return;
            } else {
                correctify_same($('#pos_phone' + i), "");
            }
            result = validate_phone($('#pos_phone' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                return;
            } else {
                correctify_same($('#pos_state_id' + i), "");
            }
        }

        pos_total = pos_total + 1;
        $('#A' + pos_total).css('display', 'block');
        $('#pos_total').val(pos_total);
    }

}

function delete_place_of_stay() {
    if ($('#pos_total').val() == 1) {
        alert("No more places can be deleted");
    }
    else {
        var pos_total = $('#pos_total').val();
        pos_total = parseInt(pos_total);
        $('#A' + pos_total).css('display', 'none');
        $('#place_of_stay' + pos_total).val('');
        $('#pos_address' + pos_total).val('');
        $('#pos_state_id' + pos_total).val('');
        $('#pos_dist_id' + pos_total).val('');
        $('#pos_phone' + pos_total).val('');
        pos_total = pos_total - 1;
        $('#pos_total').val(pos_total);
    }

}


function add_place_of_stay_b() {
    if ($('#pos_total').val() == 4) {
        alert("No more places can be added");
    }
    else {
        var pos_total = $('#pos_total').val();
        pos_total = parseInt(pos_total);
        pos_total = pos_total + 1;
        $('#A' + pos_total).css('display', 'block');
        $('#pos_total').val(pos_total);
    }

}

function add_place_of_stay_bgd() {
    var pos_total = $('#pos_total').val();
    pos_total = parseInt(pos_total);
    if (pos_total == 4) {
        alert("No more places can be added");
        return;
    }
    else {
        for (var i = 1; i <= parseInt(pos_total); i++) {
            var result = validate_pos($('#place_of_stay' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#place_of_stay' + i), result);
                return;
            }
            else
            {
                correctify_same($('#place_of_stay' + i), "");
            }
            result = validate_pos($('#pos_address' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_address' + i), result);
                return;
            } else {
                correctify_same($('#pos_address' + i), "");
            }
            result = validate_pos($('#pos_state_id' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_state_id' + i), result);
                return;
            } else {
                correctify_same($('#pos_state_id' + i), "");
            }
            result = validate_pos($('#pos_dist_id' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_dist_id' + i), result);
                return;
            } else {
                correctify_same($('#pos_dist_id' + i), "");
            }
            
            result = validate_email($('#pos_email' + i).val(), 0);
            if (result != "true")
            {
                errorify_same($('#pos_email' + i), result);
                return;
            } else {
                correctify_same($('#pos_email' + i), "");
            }
            
            result = validate_phone($('#pos_phone' + i).val(), 1);
            if (result != "true")
            {
                errorify_same($('#pos_phone' + i), result);
                return;
            } else {
                correctify_same($('#pos_phone' + i), "");
            }
        }

        pos_total = pos_total + 1;
        $('#A' + pos_total).css('display', 'block');
        $('#pos_total').val(pos_total);
    }

}

function showHideprevNat() {

    // $( "#myselect option:selected" ).text();
    if ($('#nationality_by').val() == 'BY BIRTH' || $('#nationality_by').val() == 'By Birth') {
        $('#prevNationality_rows').css('display', 'none');
        $('#prev_nationality').val('');
    } else {
        $('#prevNationality_rows').css('display', 'block');

    }
}

function showHideAppointment() {

    var a = $('#missioncode_id_reprint').val();
    var apptFlag = a.substring(4, 5);

    if (apptFlag == "1") {
        $('#appointmentButton').css('display', '');
    } else {
        $('#appointmentButton').css('display', 'none');
    }

}

function validate_appointment_mission(mission_code) {


    if (mission_code != "" && mission_code.length == 5) {
        var flag = mission_code.substring(4, 5);
        if (flag == "1" || flag == 1) {
            return true;
        }
    }
    return false;

}

function backButtonOverride()
{
    // Work around a Safari bug
    // that sometimes produces a blank page
    setTimeout("backButtonOverrideBody()", 1);

}

function backButtonOverrideBody()
{
    // Works if we backed up to get here
    try {
        history.forward();
    } catch (e) {
    // OK to ignore
    }
    setTimeout("backButtonOverrideBody()", 500);
}


function validate_event_date(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        value = value.replace(/^\s+|\s+$/gm, '');//trim
        if (requiredOrNot == 1 && required(value) == false)
            return "Expected Event date is required";
        else if (checkForOldIe(value) == false)
            return "Date format dd/mm/yyyy required";
        else if (value.length < 10)
            return "Minimum 10 characters are required";
        else if (validateLength(value, 10) == false)
            return "Date can contain 10 characters maximum";
        else if (checkDate(value) == false)
            return "Invalid Date";

        else if (dateGreaterThanorEqualsToday(value) == false)
            return "Date must be greater than or equal to today's date"
    /* add the necessary validations here */
    }
    return "true";
}


function delete_place_of_stay_bgd() {
    if ($('#pos_total').val() == 1) {
        alert("No more places can be deleted");
    }
    else {
        var pos_total = $('#pos_total').val();
        pos_total = parseInt(pos_total);
        $('#A' + pos_total).css('display', 'none');
        $('#place_of_stay' + pos_total).val('');
        $('#pos_address' + pos_total).val('');
        $('#pos_state_id' + pos_total).val('');
        $('#pos_dist_id' + pos_total).val('');
        $('#pos_email' + pos_total).val('');
        $('#pos_phone' + pos_total).val('');
        pos_total = pos_total - 1;
        $('#pos_total').val(pos_total);
    }
}

function show_hide_migrated_from_india() {

    if (document.getElementById('mgt1').checked == true) {
        $('.migration_class').css('display', 'block');
        $('#mgtDate').prop('disabled', false);
        $('#mgtDetails').prop('disabled', false);
    }
    else if (document.getElementById('mgt2').checked == true) {
        $('.migration_class').css('display', 'none');
        $('#mgtDate').val('');
        $('#mgtDetails').val('');
        $('#mgtDate').prop('disabled', true);
        $('#mgtDetails').prop('disabled', true);
    }
}



function varify_mission(missionfromfileno, missioncode) {
    //alert("missionfromfileno = "+missionfromfileno+", missioncode = "+missioncode);

    if (missionfromfileno == missioncode) {
        return "true";
    }
    return "Please Select the correct mission.";
}
function cal_age(value1, value2) {

    var dt1, dt2, dt3;
    date1 = value1.substring(0, value1.indexOf("/"));
    month1 = value1.substring(value1.indexOf("/") + 1, value1.lastIndexOf("/"));
    year1 = value1.substring(value1.lastIndexOf("/") + 1, value1.length);

    date2 = value2.substring(0, value2.indexOf("/"));
    month2 = value2.substring(value2.indexOf("/") + 1, value2.lastIndexOf("/"));
    year2 = value2.substring(value2.lastIndexOf("/") + 1, value2.length);

    dt1 = new Date(month1 + "/" + date1 + "/" + year1);

    dt2 = new Date(month2 + "/" + date2 + "/" + year2);

    dt3 = dt1.getTime() - dt2.getTime();

    dt3 = Math.floor(((dt3 / 86400000) / 30) / 12);
    return dt3;
}
function validate_msn_hospital_name(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Please Enter Hospital's name in Mission";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}
function validate_ind_hospital_name(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Please Enter Hospital's name in India";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}
function validate_msn_hospital_add(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Please Enter Hospital's Address in Mission";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}
function validate_ind_hospital_add(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Please Enter Hospital's Address in India";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}
function validate_address_regex(value, requiredOrNot, maxlength) {
    requiredOrNot = parseInt(requiredOrNot);

    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Details Required";

        else if (validateLength(value, maxlength) == false)
            return "Maximum " + maxlength + " characters allowed";

        else if (addressRegex(value) == false)
            return "Invalid Characters";


    }
    return "true";
}

function display_provinence(country_code, visa_type) {
    var country_code_var = country_code;
    var visa_type_var = visa_type;
    if (country_code_var == 'CHN' && visa_type_var == '3') {
        $('#china').show();
        $('#normal').hide();
        $('#pres_add3').val('');
    } else {
        $('#normal').show();
        $('#china').hide();
        $('#province_name').val('');
    }
}

function validate_places_to_be_visited(value, requiredOrNot) {
    requiredOrNot = parseInt(requiredOrNot);
    if (requiredOrNot == 1 || (requiredOrNot == 0 && value.length >= 1)) {
        if (requiredOrNot == 1 && required(value) == false)
            return "Please enter places to be visited";

        else if (validateLength(value, 50) == false)
            return "Maximum 50 characters allowed";

        else if (value.match(/^[,a-zA-Z\s/]+$/) == null)
            return "Invalid Characters";

    }
    return "true";
}


function compare_two_dates_diff(date1,date2,day_diff) {
    // This function is used to calculate difference between two dates
    // return true if calculated days of difference are greater than given days (day_diff)..
    
    //date1 - passportExpiryDate
    //date2 - JourneyDate
    //alert("passportExpiryDate = "+date1+" , JourneyDate = "+date2);
    //convert value into date object
    var n = date1.split("/");
    if (n[0].substring(0, 1) == "0") {
        n[0] = n[0].substring(1, 2);
    }
    n[1] = n[1] - 1;
    var newDate1 = new Date(n[2], n[1], n[0]);
    newDate1.setHours(0, 0, 0, 0);
    
    var m = date2.split("/");
    if (m[0].substring(0, 1) == "0") {
        m[0] = m[0].substring(1, 2);
    }
    m[1] = m[1] - 1;
    var newDate2 = new Date(m[2], m[1], m[0]);
    newDate2.setHours(0, 0, 0, 0);
    
    var timeDiff = Math.ceil(newDate1.getTime() - newDate2.getTime());
    var diffDays_var = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    //alert("diffDays_var = "+diffDays_var+", day_diff = "+day_diff);
    if (diffDays_var>day_diff)
        return true;
    else
        return false;
}
