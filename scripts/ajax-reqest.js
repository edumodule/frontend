$(document).ready(function() {

    console.log('start');

    // add certificate
    $('.add-cert-btn').on('click', function(e) {
        e.preventDefault();

        $.json({
            //url: '?action=add-certificate',
            url: 'http://192.168.0.100:8080?action=add-certificate',
            data: {
                user_id: 1,
                certificate_id: 1
            },
            dataType: 'JSON',
            success: function(data) {
                console.log(data);
                return true;
            }
        });
    });

    // ?action=get_certificates

    var getCertificatesEl = $('.get-certificates');
    console.log(getCertificatesEl.length);

    if(getCertificatesEl.length > 0) {

        // setTimeout(function() {
        //     certificates = {
        //         "1": {
        //             "cert_img": "cert6.png",
        //             "cert_title": "Test 1"
        //         },
        //         "2": {
        //             "cert_img": "cert10.png",
        //             "cert_title": "Test 2"
        //         },
        //         "3": {
        //             "cert_img": "cert3.png",
        //             "cert_title": "Test 5"
        //         }
        //     }
        //     getCertificatesEl.html('');
        //     $.each(certificates, function(i ,val) {
        //         getCertificatesEl.append('<div class="col-lg-4"> ' +
        //             '<div class="cert-item"> ' +
        //             '<img src="img/'+val.cert_img+'" alt=""> ' +
        //             '<div class="cert-title">'+val.cert_title+'</div> ' +
        //             '</div> ' +
        //             '</div>');
        //     });
        // }, 2000);

        $.each(getCertificatesEl, function (i, val) {
            console.log('start ajax');
            $.ajax({
                url: '?action=get-certificates',
                dataType: 'JSON',
                success: function(data) {
                    console.log(data);

                    if(data.certificates != undefined && data.certificates.length > 0) {
                        getCertificatesEl.html('');
                        $.each(data.certificates, function(i ,val) {
                            getCertificatesEl.append('<div class="col-lg-4"> ' +
                                '<div class="cert-item"> ' +
                                '<img src="img/'+val.cert_img+'" alt=""> ' +
                                '<div class="cert-title">'+val.cert_title+'</div> ' +
                                '</div> ' +
                                '</div>');
                        });
                    }

                    return true;
                }
            });
        });
    }

});