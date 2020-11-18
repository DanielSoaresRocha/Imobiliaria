package com.backend;

import com.backend.domain.Automovel;
import com.backend.domain.Produto;
import com.backend.domain.Residencia;
import com.backend.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Arrays;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}


	@Autowired
	private ProdutoRepository produtoRepository;
	@Override
	public void run(String... args) throws Exception {


		Automovel aut1 = new Automovel(null, "Fiat Uno",13.000,"Carro todo revisado 4pneus novos amortecedores novos Correia dentada nova caixa de direção nova ",
			"MILLE 1.0 FIRE","Branco","135726","Fiat",	2008,2, "Manual",1.0,"flex");

		Automovel aut2 = new Automovel(null, "Hb20s",48.000,"Todo revisado Pneus semi novos", "HYUNDAI HB20S C.PLUS/C.STYLE 1.6 FLEX 16V MEC.4P",
				"Branco","57200","HYUNDAI",2017,4, "Manual",1.6,"flex");
		Automovel aut3 = new Automovel(null, "Nissan Versa",36.000,"Veículo em Perfeito estado, venha conferir! ",
				"NISSAN VERSA S 1.0 12V FLEXSTART 4P MEC.","Branco","50900","NISSAN",	2016,4, "Manual",1.0,"flex");
		Automovel aut4 = new Automovel(null, "Sandero",40.000,"Carro todo revisado 4pneus novos ",
				"RENAULT SANDERO INTENSE FLEX 1.6 16V 5P AUT.","Azul","5680","RENAULT",	2020,4, "Automático",1.0,"flex");
		Automovel aut5 = new Automovel(null, "Hilux",80.000,"Carro todo revisado",
				"TOYOTA HILUX CD SRV 4X4 3.0 8V 116CV TB DIESEL","Branco","265000","TOYOTA",	2007,4, "Automático",4.0,"flex");



		Residencia res1 = new Residencia(null, "Casa com 3 dormitórios ",540.000,"Excelente casa duplex localizada no bairro Capim Macio, zona sul de Natal.",
				"Rua João Vidal","Capim Macio","59082250","403","Piscina, Varanda, Churrasqueira","Natal",
				"RN",283.00,4,2,4,true, 100.0,50.0);
		Residencia res2 = new Residencia(null, "Casa com 3 dormitórios para Alugar",1.100,"Casa em Candelária, com garagem para 03 (três) carros, sala para dois ambientes",
				"Rua Barão de Serra Branca","Candelária","59065550\n","409","Piscina, Varanda, Churrasqueira","Natal",
				"RN",109.00,2,2,2,true,0.0,100.0);
		Residencia res3 = new Residencia(null, "Kitnet cidade da esperança para Alugar",540.00,"Kitnet bairro cidade da esperança",
				"Rua Juazeiro do Norte","Cidade da Esperança","59071030","403","Piscina, Varanda, Churrasqueira","Natal",
				"RN",283.00,2,1,0,false,20.0,5.0);
		Residencia res4 = new Residencia(null, "Casa em Ielmo Marinho",100.00,"Casa no centro da cidade",
				"Princesa Isabel","Centro","59490000","34","Próximo ao mercadinho","Ielmo Marinho",
				"RN",14.00,2,1,0,false,0.0,0.0);


		produtoRepository.saveAll(Arrays.asList(aut1, aut2,aut3,aut4,aut5,res1,res2,res3,res4));

	}
}
