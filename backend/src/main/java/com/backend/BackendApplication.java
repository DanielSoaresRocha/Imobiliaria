package com.backend;

import com.backend.domain.Anunciante;
import com.backend.domain.Automovel;
import com.backend.domain.Produto;
import com.backend.domain.Residencia;
import com.backend.domain.enums.Perfil;
import com.backend.domain.enums.TipoCliente;
import com.backend.repositories.AnuncianteRepository;
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

	@Autowired
	private AnuncianteRepository anuncianteRepository ;

	@Override
	public void run(String... args) throws Exception {


		Anunciante anun1 = new Anunciante(null,"Wesley Leocadio","sivawesley374@gmail.com","12088879471", TipoCliente.PESSOAFISICA);
		anun1.getTelefones().addAll(Arrays.asList("27363323","93838393"));
		anun1.addPerfil(Perfil.ADMIN);

		Anunciante anun2 = new Anunciante(null,"Daniel Soares","denk@gmail.com","12288879471", TipoCliente.PESSOAFISICA);
		anun2.getTelefones().addAll(Arrays.asList("000000000"));
		anun1.addPerfil(Perfil.ANUNCIANTE);

		Anunciante anun3 = new Anunciante(null,"Pedro Ricardo","pedroRicardo@gmail.com","12088879472", TipoCliente.PESSOAFISICA);
		anun3.getTelefones().addAll(Arrays.asList("000000000","911111111"));
		anun1.addPerfil(Perfil.ANUNCIANTE);

		anuncianteRepository.saveAll(Arrays.asList(anun1, anun2, anun3));

//
//		Automovel aut1 = new Automovel(null, "Fiat Uno",13.000,"Carro todo revisado 4pneus novos amortecedores novos Correia dentada nova caixa de direção nova ",
//			"MILLE 1.0 FIRE","Branco","135726","Fiat",	2008,2, "Manual",1.0,"flex");
//
//		Automovel aut2 = new Automovel(null, "Hb20s",48.000,"Todo revisado Pneus semi novos", "HYUNDAI HB20S C.PLUS/C.STYLE 1.6 FLEX 16V MEC.4P",
//				"Branco","57200","HYUNDAI",2017,4, "Manual",1.6,"flex");
//		Automovel aut3 = new Automovel(null, "Nissan Versa",36.000,"Veículo em Perfeito estado, venha conferir! ",
//				"NISSAN VERSA S 1.0 12V FLEXSTART 4P MEC.","Branco","50900","NISSAN",	2016,4, "Manual",1.0,"flex");
//		Automovel aut4 = new Automovel(null, "Sandero",40.000,"Carro todo revisado 4pneus novos ",
//				"RENAULT SANDERO INTENSE FLEX 1.6 16V 5P AUT.","Azul","5680","RENAULT",	2020,4, "Automático",1.0,"flex");
//		Automovel aut5 = new Automovel(null, "Hilux",80.000,"Carro todo revisado",
//				"TOYOTA HILUX CD SRV 4X4 3.0 8V 116CV TB DIESEL","Branco","265000","TOYOTA",	2007,4, "Automático",4.0,"flex");



		Residencia res1 = new Residencia(null, "Casa com 3 dormitórios ",540.000,"Excelente casa duplex localizada no bairro Capim Macio, zona sul de Natal.", anun1,
				"Rua João Vidal","Capim Macio","59082250","403","Piscina, Varanda, Churrasqueira","Natal",
				"RN",283.00,4,2,4,true, 100.0,50.0);
		Residencia res2 = new Residencia(null, "Casa com 3 dormitórios para Alugar",1.100,"Casa em Candelária, com garagem para 03 (três) carros, sala para dois ambientes", anun1,
				"Rua Barão de Serra Branca","Candelária","59065550\n","409","Piscina, Varanda, Churrasqueira","Natal",
				"RN",109.00,2,2,2,true,0.0,100.0);
		Residencia res3 = new Residencia(null, "Kitnet cidade da esperança para Alugar",540.00,"Kitnet bairro cidade da esperança",anun1,
				"Rua Juazeiro do Norte","Cidade da Esperança","59071030","403","Piscina, Varanda, Churrasqueira","Natal",
				"RN",283.00,2,1,0,false,20.0,5.0);
		Residencia res4 = new Residencia(null, "Casa em Ielmo Marinho",100.00,"Casa no centro da cidade",anun2,
				"Princesa Isabel","Centro","59490000","34","Próximo ao mercadinho","Ielmo Marinho",
				"RN",14.00,2,1,0,false,0.0,0.0);



		produtoRepository.saveAll(Arrays.asList(res1,res2,res3,res4));

	}
}
