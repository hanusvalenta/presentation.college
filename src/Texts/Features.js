import React from 'react'

function Features() {
  return (
    <><h2 id="Section2">Vlastnosti hry</h2><p>
      Do hry se mi dosud podařilo implementovat několik vlastností a další mám ještě v plánu. Zde je jejich výčet:
    </p><h4>Prostředí</h4><p>
        Prostředí je navržené tak, aby se mohl hráč pohybovat po mapě v co největším rozsahu, tj. aby mohl jít všude tam, kam chce. V budoucnu bych rád přidal více úrovní s pomalu se zvyšující obtížností podle toho, jak hráč postupuje hrou.
      </p><h4>Překážky a pomocné objekty</h4><p>
        Momentálně může hráč skákat; nadále budou do hry zahrnuty různé překážky, pasti a nepřátelé, které musí hráč překonávat při průchodu levelem, aby dosáhl svého cíle. Hráč bude moci také používat řadu pomocných objektů z nabídky, např. dynamit (již částečně implementován), základní vozidla nebo malý jeřáb.
      </p><h4>Arzenál zbraní</h4><p>
        Do hry jsem zatím zapojil dva typy zbraní, které se dají měnit. Systém zbraní chci rozšířit tak, aby hráči měli vždy možnost zvolit si ideální zbraň pro danou situaci.
      </p><h4>Vylepšení</h4><p>
        Ve hře budou také různá vylepšení, které může hráč využít k získání dočasné výhody ve hře. Příkladem je větší rozsah destrukce.
      </p><h4>Režim</h4><p>
        Momenálně je režim nastaven na dva samostatné hráče, ale program počítá s více hráči, kterým umožní soutěžit proti sobě nebo se spojovat v herních módech s různými variacemi.
      </p><h4>Výzvy</h4><p>
        Hráč bude moci plnit výzvy, aby získal odměny nebo odemkl nový obsah.
      </p></>
  )
}

export default Features