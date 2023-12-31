<?php
require '../../global/connection.php';

$QUERY_PERIODO = "";
$QUERY_GROUP = "";
$QUERY_ORDER = "";
$FILTRO_P = 1;

$MESES = array("","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

$YEAR_P = $_POST["YEAR"];

if($YEAR_P != ""){
    $QUERY_PERIODO = " WHERE YEAR(th.date) = '" . $YEAR_P . "' AND th.status NOT IN (2) ";
}else{
    $QUERY_PERIODO = " WHERE YEAR(th.date) = '" . date("Y") . "' AND th.status NOT IN (2) ";
}
$QUERY_GROUP = " GROUP BY MONTH(th.date) ";
$QUERY_ORDER = " ORDER BY MONTH(th.date) ASC) ";

$query = "SELECT MONTH, SUM(TOTAL) AS TOTAL FROM(";
$query .= "(SELECT MONTH(th.date) AS MONTH, SUM(th.total_net) AS TOTAL FROM tbl_invoice th" . $QUERY_PERIODO . $QUERY_GROUP . $QUERY_ORDER . " UNION ";
$query .= "(SELECT MONTH(th.date) AS MONTH, SUM(th.total_net) AS TOTAL FROM tbl_receipt th" . $QUERY_PERIODO . $QUERY_GROUP . $QUERY_ORDER . " UNION ";
$query .= "(SELECT MONTH(th.date) AS MONTH, SUM(th.total_net*-1) AS TOTAL FROM tbl_credit_note th $QUERY_PERIODO $QUERY_GROUP $QUERY_ORDER ";
$query .= ") AS RPT GROUP BY 1 ORDER BY 1";

$LST_REPORT = $pdo->prepare($query);
$LST_REPORT->execute();
$CANT_ROWS = $LST_REPORT->rowCount();
$ARRAY_DATA = array();
$ARRAY_LABELS = array();
$JSON_DATA = array();
if ($CANT_ROWS > 0) {
    $CONT = 0;
    foreach ($LST_REPORT as $ROW) {
        $NUM_MES = $ROW["MONTH"];
        $TXT_PERIODO = $MESES[$NUM_MES];
        $TOT_VENTA = round($ROW["TOTAL"], 2);

        $ROW_DATA = [$CONT, $TOT_VENTA];
        $ROW_LABEL = [$CONT, $TXT_PERIODO];

        $CONT++;

        array_push($ARRAY_DATA, $ROW_DATA);
        array_push($ARRAY_LABELS, $ROW_LABEL);
    }
    array_push($JSON_DATA, $ARRAY_DATA, $ARRAY_LABELS);
}
echo json_encode($JSON_DATA);
