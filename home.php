
<!DOCTYPE html">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>CU Portal</title>

        <link rel="stylesheet" href="assets/css/layout.css"  />

        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/easyResponsiveTabs.js"></script>
        <script src="assets/js/bootstrap-datepicker.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <script src="assets/js/mycustom.js"></script>
        <script>
        $(document).ready(function(){

        $('#dp1').datepicker();

        $("#tabbed-container").easyResponsiveTabs({
                    type: 'vertical', //Types: default, vertical, accordion
                });

        });

        </script>

    </head>
    <body>

        <div class="header">

            <div class="container">

                <div class="logo">

                </div>

                <ul class="nav">
                 Welcome   Student | <a title="Logout" href='index.php'>Logout</a>
                </ul>
            </div>

        </div>

        <div class="main-wrapper container clearfix">

            <div id="tabbed-container">

                <ul class="resp-tabs-list four columns">

                    <li id='menu'><a href='docs/profile.php'target="frame">HOME</a>

                    <li id='menu'><a href='#'>DOCUMENTS NEEDED</a>
                        <ul id='sub-menu'>
                                                        <li><a href="docs/birthcert.php"  target="frame">Birth Certificate </a></li>
                                                        <li><a href="docs/wassce.php"  target="frame">WASSCE Result </a></li>
                                                        <li><a href="docs/jambadmit.php"  target="frame">JAMB Admision Letter </a></li>
                                                        <li><a href="docs/jambres.php"  target="frame">JAMB Result </a></li>
                                                        <li><a href="docs/state.php"  target="frame">State of Origin </a></li>

                        </ul>

                                          </li>
                </ul>

                <div class="resp-tabs-container sixteen columns">

        <script type="text/javascript">
/* <![CDATA[ */
var curl = location.search.substring(1) ? unescape(location.search.substring(1)) : 'docs/profile.php';
document.writeln('<iframe src="'+curl+'" width="820" height="600" name="frame" frameborder="0">');
document.writeln('<p>This page doesn\'t support iframes.<\/p>');
document.writeln('<\/iframe>');
/* ]]> */
</script>

<noscript>
<iframe src="form.php" width="820" height="600" name="frame" frameborder="0" >
<p>This page doesn't support iframes.<\/p>
<\/iframe>
</noscript>
                   <!-- <iframe src='profile.php' name="frame" width="820" height="600">
                    </iframe>-->
                </div>

            </div>

        </div>
    </body>
</html>
