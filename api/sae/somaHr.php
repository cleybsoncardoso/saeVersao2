<?php

    function soma($vetor, $horaAtual, $somar, $ultimaHr){

            //cria um array com as horas trabalhadas ai quando quiser adicionar mais uma hora nesse array fica mole 
            $tempos = array(
            $horaAtual,
            $somar
            );
            //inicializa a variavel segundos com 0
            $segundos = 0;
			$ultima = explode( ':', $ultimaHr );
            foreach ( $tempos as $tempo ){ //percorre o array $tempo
            list( $h, $m, $s ) = explode( ':', $tempo ); //explode a variavel tempo e coloca as horas em $h, minutos em $m, e os segundos em $s

            //transforma todas os valores em segundos e add na variavel segundos 

            $segundos += $h * 3600;
            $segundos += $m * 60;
            $segundos += $s;

            }

            $horas = floor( $segundos / 3600 ); //converte os segundos em horas e arredonda caso nescessario
            $segundos %= 3600; // pega o restante dos segundos subtraidos das horas
            $minutos = floor( $segundos / 60 );//converte os segundos em minutos e arredonda caso nescessario
            $segundos %= 60;// pega o restante dos segundos subtraidos dos minutos

			if($horas >= $ultima[0] && $minutos > $ultima[1] || $horas > $ultima[0]){
				if($horas >= 24){
					return $vetor;
				} else {
					if($horas < 10){
						$horas.="0";
					}
					if($minutos < 10){
						$minutos.="0";
					}
					$vetor[] = "{$horas}:{$minutos}";
					return soma($vetor, "{$horas}:{$minutos}:{$segundos}", $somar, $ultimaHr);
				}
			} else {
				return soma($vetor, "{$horas}:{$minutos}:{$segundos}", $somar, $ultimaHr);
			}
            

    }
?>