<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MENU</title>
</head>

<body>
    <?php
    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'csd8';

    $conn = mysqli_connect($server, $user, $pass, $db);
    if (!$conn) {
        die('Connection failed' . mysqli_connect_error());
    } else {
        echo 'Connected<br>';
    }

    $accno = $_GET['accno'];
    $password = $_GET['password'];

    $sql = "SELECT * FROM ACCOUNTS WHERE ACC='$accno'";
    if ($res = mysqli_query($conn, $sql)) {
        echo 'selceted';
    } else {
        echo "Not found";
    }
    if (mysqli_num_rows($res) > 0) {
        echo "<br>account found<br>";
        $row = mysqli_fetch_array($res);
        if ($row['PASS'] == $password) {
            echo "loged in<br>";
            echo 'MENU<br><a href="withdraw.html">withdraw</a><br>
    <a href="deposit.html">deposit</a>';
        } else {
            echo "Login failed wrong password";
        }
    } else {
        echo "account no not found";
    }



    ?>

</body>

</html>