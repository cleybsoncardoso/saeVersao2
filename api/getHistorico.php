<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

$vetor = array();
$the_request = &$_GET;
if (isset($_GET["id"])) {
    if ($_GET["id"] == "") {
        $sql = "SELECT * FROM saeapp_historico ORDER BY idPaciente DESC";
        $result = $con->query($sql);
        $numrow = $result->num_rows;
        if ($numrow > 0) {
            while ($row = $result->fetch_assoc()) {
                $vetor[] = $row;
            }
            echo json_encode($vetor);
        }
        echo json_encode(false);
    } else {
        $id = $_GET["id"];
        $sql = "SELECT * FROM saeapp_historico WHERE idPaciente = '$id' order by idsaeapp_historico desc";
        $result = $con->query($sql);
        $numrow = $result->num_rows;
        if ($numrow > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        } else {
            echo json_encode(false);
        }
    }
}
?>
