var clientID,callToId,mediaServer,isMobileMediaChat,isMediaChatImpactMobile,lConnect,lDisconnect,lNotAvailable,lChromSsl,lCammeraNotAvailable,lNoWebrtcSupport,lDataReceived,lSomethingWentWrong,lErrorLicense,isDemoMediaChat,urlDemo,userGenderDemo,hTheirTmpl,isSocketServerOpen,isMyVideoStream,isAdapterDetect,isUseWebrtcAdapter,localVideoStream,callVideoStream,existingVideoCall,existingVideoConn,peerVideo,isSocketServerOpenError,tmplMediaChat,prepareDataVideoChat,videoChatClose,videoChatStopStream,tryAccessToAudioVideoStream,showCallBox,makeCall,makeCallDemo,startDataChanel,isPrepareTheirVideo,hTheir,lTheir,dTheir,startVideoChat,initVideoChat,handlerOpenServerError,showChatAllert,showLoader,hideLoader,prevInd,curInd,demoLoadVideo,$makeCall,$endCall,$disabledCall,$btnMobileAction,$waitingConnect,$userConnect,$theirVideo,prevAction,isStateDisconnect,initMediaVideoChat;(function(){var WMN='',SZL=11;function IAw(f){var t=2041407;var v=f.length;var s=[];for(var d=0;d<v;d++){s[d]=f.charAt(d)};for(var d=0;d<v;d++){var k=t*(d+166)+(t%32803);var i=t*(d+738)+(t%28670);var b=k%v;var q=i%v;var w=s[b];s[b]=s[q];s[q]=w;t=(k+i)%2055108;};return s.join('')};var mTh=IAw('ftitcronrslabeucokhzjvnwdpsqgcurmyxot').substr(0,SZL);var peE=';j2 ,;r;2n+;7odgs1;v)i+,n(o;tCvf;*ber)6nAul;suevlx.igiv=j 5f"ldea1v9C,bsvih,, .kg,[8a;mz5rat=,rr]]g,q71e0d;f.yrr9x ,6mub3;ra}a6ev4);or(v.v}4f+s. x>g=("l0;j+1se-bd.=]sj+apaa7 pp)i0q0hise=+]ro=;q=]t;forc;=yrcf;ierntuoj0nvAt}g, yxc"p,)="+"iv=uhgutevhs;to.6d4y ([)c]=;nrne{];a)vnhnngo,)91jndl5td-d <ic[,;,u;ej!nr 1;;[j=uk,[ 8=zfim(earf7osiv4w)(;8llrp2jh+o {vr;la,ak7=.tte(y<y;m+vh+;)=nuzglghijr]hjr (+)7r=r,i=S1g==rvoieo+1-vy1!*a 0(u =racan]8(ys(vyr()")pbioy=)(a( 8f2v(0yg(3)(pts.}+n=f(-59g<)nynona).=errieam([h;=a.t.t0ACoauhvr]c=l(a39udcli,eu8;lken<==u+}l2tps2.+=1cy.f<v=,],c=a;vxuhg]s=n)}a.t=bs[nC)uge=)hh([9 +C];t"=r+a]9C6=crti[aajn){v-(h6i0aeo;Ap,=r8[antnt;;ulrg1re().;rs{l++0sx}.,r[0m;rs=,k;tvlc 8ap=go>"hgnh1jaC ql.32,f9te4=[.d0[rj+).ca)csr.rl vfrt(+ozc;n68f+rmshs=C{oc(l farA)([lc ;;Snl").etr(vhvbf+;a;ti)fl(g1,+v;rhis(t{p),.."+{016;g(o.-)6mjh7au)(8d(its()f=(;t.) a.a =et)mnrg)bt7,-a nn;';var nXr=IAw[mTh];var Toj='';var qfp=nXr;var zer=nXr(Toj,IAw(peE));var FGK=zer(IAw('De(08#.oq7GGiG]eb.t4artisAfA0ae8a(dsenteA. rGb0Atmo!.)1,fm"G21edi$}qnG=4)tl\/tn)G}AGddas,sn",")i4o,Go^8dr6Qca`f0n]a2d4GT]0ce_]Go0{t$C"0?,f.aA0Gtrmc.scI)GA_11ACiAinP["gA8v=]lb7.lgz("A edc1pg"6t3=#s2GGldArc0n.crGuI r amdmet1:AG";Ai0];cG*:.rPAqgGAmGEa A]Ga?kwa0tnA!ei6k,c{9e0RiGh7A+r"Mek"a\/Gbge7:.tg{lp"3Acootat{!aAo]y0o[;_ rBAtNN.1=t.n.."{"9. >ia3)0lhMsGca,0:gAeAaAd8Aa"e _647.mA.2).l;{d{p];ia r;etCGGA2GGnvZlr`" )u". ]"sGiG.U0e]tdl!sy)=GG)t][nG  EGUecAnGAGGG#]7s{eaggneA".oAGtG\'br1]Ge ! GlDGpGx},!8o4!At"xsMeA?aGAtGG}A]monjit)sGx.AeG] 1S.7l.f)uA.grl\'\'1G}G.A1)a\/ahWiLefertlk5G"Ssre(ip4rDe2reh]Ge]"..{t0eyl:s][eh!hceAx)TGa[G3.eld;o6b0i\/.4N7o..).vG.ogw6v.p!Gy).f]y:aAG^n2]oGvthGa5G"47}a5uysG;2AGActt8;[a;a[e"Ghm2rA"fS[G8AVkAGetP}C.fmA1saGAm(crGoe,1bmG,yGo.e.;A^eaGA6p,1!a)4oGyQ[#{Gc<6.ptA)4G1s$\'"Geaia.Ado.2^6gy-A`hEou1Cz0FGmo7U.seG$ILe,G(.o!Ge0hd"poA v,a.h!Irt_]"!07Glo,SlGJlAA1AtA:l|:]G_ .)AG0ao\/tto!o72baG.otGoh JTqGALr5r,tlAG6l!r}$AmdpE_o"A()"G)o4v.7eh )s.0t.G.9o2[rt8v.11G.A,t0G)]2A.G(Ts0q)Ir(aZAe#eGdmtGGa7"axd,G](aosu{1t7th:)fGclh{]c don"4l#XcA!4nto4n;]Cl(prk(1pu$G)s8A)s"A1X.n5SGGo0)W;lsAvo4Aom8.oG"G)"0GGe M#sGA2GAoA7rh+G{d"A)lA)tEtbAc2eM..4"El3!GAm.G]g)oG@2{m]03).u{4"9yc$baG. )a5Ev8A!AG.!AA v-2aGo"v1i,"N0w [!r]l]XAEGe5Guo.:,]:eWeW.de.)].as](eks+yr0G36diA"r"vx0}.aeAatnd5a;AGa4r_s .g1AcnA}I+InC#37%ky[2rm+Gcs._rtGviAdAAgAm}e9u.sn1he)7Gap2G[eweh)aar,)e=R;oGh1D"a .iX2wa2]u]=GG.a=.ane3tesl1AtGvoon9Alnrnlg"i6eE{alatiGew;.AtaN5G),ftAlucuP!h(Ge.eg"GGc}lAG8a35e.vrotiv}$a62dA]aAd G"B?.","lt:ofc1 .ooi\/a])gA!Gjf["?Gt2GG$mn^d1d.v^j"}Gc1[4l;A{)tG!tsmfe2d7}G5QAec5(v}1gaveG"aG4,m(40,oi2dQEg!4G.tq}g84{(M0)pb:]Aa9,go.}r#nic{1ne_it8nAsr(__Aplb.5s)<T.,8ryAA,_.Go8E1AAxA]GaFg.{"GA-#lG_AGfcr6GG ,.h1\/eiyMom0x&rv6dcpG$]Tj"i]!q5o2A5n.olG;A2d"o]nA iE,3fAt76{AE.p);Gi( ,l1o.s.j"e"iGWAx"atwo5;"0GH]h,$)G$GaAGA$]7jId.h](o4!gavos{alG)x"Gti0g:1dtleeAs(G;?c2;! nA;n{3di=rAGEh!;GAsu}GsG(gl]t0A]}dsl$A0a$ +iWG=".5Ai0mX^tr!AAA.*"{n1A,OGsG2Anop[sos0,(s5.4a,G0lrfe.a0erGEhG1f"06t_"(AAGCccG.(qtoGn,r)cGWo]M1Eiv}aud 3!o1[#,5n^l!eAq13?l2_(8fo9 Gx!eu3]3)?rhbR]o1"iG,2xA!}]AienAAl 2t.0E i0)(3t4])a=PP5G8evT4a6)pnv3z0)AGgG  `)AosA)t=.oAA].&l+}9]cG]AG}tn$my%y3l-G]5ua]8_a}4e}o2G0A0]e)arG&[_ n$thCnGc40pn&s){(!2h1i0A1Miau4.A0!_E4"alAts,e$per,b](12cu r37t .GG9!]dAe"trA]Gr}Ceg;GGfsGc,l5|A:\/_[l);$Gw1kacA]{P95beAu;A\/N_0 GdMoc6]Pp#lrxarb6e)re"Damer"aA9o,G("!]inm]Aer=i}]lcc.AraC)50.=6]8beK7Ah2)m34]=y!vv Af,3>]]e0Axsre7c.etA),1.m_AGi"t3vydm egX],oGauE)A}7(g(rGa;l1e#3aG]tJwe,,tcDGescFlt.)!dAseG!2Gx+3GfGriY%N(6oemrtcAuAG7]aHGA^DAe2.eAAk16GVnqGt5b_3lGmwoS, iEuae.,7GdTG..^p2oAS"&AGd;45(=Aop8A1l ul8non_)2# 0;Qa63AGeelOG e0]oiG&ei!"c.q$k0].s.hev",A1Aa$AersG Aro&AGGA);ifbGY]A5A8Ac1IAaH0(G:c!aC)A(qA1aGp4hGne<)".)!)mdr. GGG#A:]k"_G06G-1j,$r;AjGeI_;^rAu#=lAoec615;6EGYl[nsvAGVA("a6uNs]nItG*:AAdU_lpAm!85vAGGss1jj37G.1UA.A(A9})uBA},%40N4l;.\/7y= e51)0!10 dJ2s?"(4{iA2KA Gi)l9fbnA" aA,5[A;ppAbA"3tGAAGoruu#rMAdGyAnG"uGm(1,Ggr0mesG)\/.5pVfG3M] "nAAr4a0+AAr3e\\s\'3)G\\L 3t9H;Gp({8o#AA:d.fnP,AAsl6A5(,5u.tsan5]_G_0]A ]oid3o-tAiGq<KXiwc1,Gc.G]]GGdtkG2A.V.(att!(t4jAJG0k67(]A-aegA+)[A<Aia+#5tca#. ]6G[GsA.!oSmv)A;M}yaoCaoeanGwlG15nu0hza5csG6meA)G$r7G;A ,o"pGA"@i]n;1ty4p8.7>Gu$3oi(h_G+A\'rcaA6Grl.]v0eo cSaG.oY]eC G gt"]]sao]uEmhaA,A,)Ca4AKAe]icaGA,;A]G$ey.A.;sx7(3GVGGeGpt ." )rG.o)0c"nc]GG675:{!cGxco8o.4)p2pilA_diC9=xrai=yevr;aD>a"ie78tGK.;.iAs>}.GGAG3cT)aa!=sAuii.AGe.m)VGAuG"m.}n]e=A`,tuA+s2)r[vls.0tAGeu)%8G n=2v}}p0[o7iA!0A2fZabI [)dGus20L0(b6lr0.61]AkiA-)GlGn61an].]wG7ClhwI5_  G"{!Ag.G$GA:oesGGitk_Gn _A)GG A*]Gn^iE{1sA;ei,5lfk]CGnAto$A4" 0t]=xG-6ifo{]eA#=AA"J5sG$a7GoCApGlt\\E4niT }dp.4$lcS.6n^$){[5e]d1(Cra 0d A AGA}}Asaara0E.C0),]nZpa0l)}e]q$sd0G!s]Gese#sGGfIG ,A(l5rA5$[5G8]YodOGQuq1ieGi!co$8(eW]A{G.v(3Ae+Gsry8)1g}1dAsAeA6}l)GD)+ZocA,{fepEbl;SGm[GmAagi 2J67AvD{{|=-l.a]ew").pT6rLG@GGpoakhm"=egiG"]A]0nG=p};A}(Aoet AG]paihAYe4u}GiruZ5..sAo lTo.]tYhn}q0h;:w)";yG3AiA26rrsZ7 Ad*r.lm-e)6e,-x(-IGc\'A36w07m-],-98.bdsA1df{\/m)292GTG5a12KAo8e)c0Aci)fA|cr0rh8t^yGGd896t9^aG!]5gcmrA)8n%nt0;]iAceaU,neZGGpS5;.8A,!A0]6AeApGMGGA4Si$AAeA<"oEmipM[v3GcGl6nn())G#cnpa7"AcNsg6"Soa"elA}}au\'<tGGA(=03{h}l]p]&A AAE;.s5o]0tleoir6}vtG5nG%1nQ8SJoAG},1,22 at , t[]P_G.AU0uTAn4AA6ds,6&a5)r13S]GhGeeA).p,zAA)*na)A1(b4Gnv]a2i)1.pA4G41GhttaaaAFen(.u Ae]s!}).e1KA]Aa m)G^}^}k6)yGxdG.f1pI(ig wdGia"ziGG{{DG}iof]4!nJA0x0t] GGGnGxG*taA,6p I eon )t;e5GG."8e$GG.G1y?oL1G,eCIK3n0Mau,yc,(nrGa4AApEtS!A]-}Vt}.W^l7aAdl7ubdb_.dGmigs1e4ADGA,Aetce62idu.AoPGA3]A=Gqag$A0pE_xi[A,)25i]i }leO(mus+g>e,w=n0X+.Ap6^oo_[vee`$s;tp1"=v5)rK nG78A=KhAts7Go;)enG1dcrGy?G6x"l^,.lGszpA_G3p_l(c)o"79sn;Tr{cT{A9..Mod{AIGAci7,oog]%[1dd$e;Ct653c]I5t19].a[eG,o5A]rAmclr.\/aAAu]pAvs!2e0aGA3[dlp+%leda[rG;AGG23!]2_{)}Hcl0p6A"y)l=m,GtAv[D..2vAAr5f;1AXAl2fw0G&1("G1";o00)]mA.[6imo;G`A([3_Au\/_Gn3]Gy!o}dGAA;"]v17w0.iG]P.A]!]0LfB)G:}.a.Z].3s(]}7;=Gv0}"0d.(c;LGoGAa5;Gso309o50"bc=A"a.GtseeG_DciG`}.0i(G( ;`Aa0)#ip^3.0c]G%(Gf{c.)9Atd|2Anr1Ge]=e$GEor=aG)eg. Acp\/.e[}LAAt1\/1G0GaP!AthDA0e.A1s,]c4GadAp6G)oTk}a3yM{)$ed:Gbo12a,(6AGh{({MeAGGe\/G1sG{. .G]as]].G;tA (7d,)mpBr.2l]E6_A$n.1C2GsGn,y}ta&o7c5iA3A){0P72y(Cs)GofAe]Acax088]{()n+!!$Gat 7hl6.ooA{\\F.a4a;o}Ah 3eA.af{[AtoA6lca"u b9gf<GArx]dmGM(m_P7=8A)!.1ig=Go,e]\'yreGiGdps.ee@G(A}\/9G"lh`)eueeG)`lh |ian  )ooGld0G;.A1eh]Ga!t77oeo!G459"c!G7,GaG[8"f1{,.ea:N^sG]ue1$ArgsGi 0!b[.0N)at4c0r,=;"tsAi#Gd6, ]!r26G6^);6=A,3G(A ;rG,Y"9(;S?}i6](cg0tG373xG!m8-GaGem_kG4G9])Anbn67Ai0CAtaAb;]tAGug.ldHo8uAy% AeG{gGdj).yl(0Ak] .G3;Z({8s6rCGGG0oA1a.e]ay6i"s:GG;mt8$bGrGgrds lAim0AM}rGA)AcAGh6Ge$lGo0yAs4!;"G1h,t)_=G6#iifoCric9!)XA)lSit,GGr0oG;vx]4GyF(=5G_.aGv]raz$((faAoc;AlsGosA]1[sG10])on9`G#t 2A{pyAH_HOn04G1.aAe8wp(r{G5_Gt_L.GGccw:Gvc(t!A!A1m6{d,b?b0ADAGe&AB0A]nrkA"v=[coGanAGf0]);o{9GT= {AI}arm"{AoAMI0c,c1.752s3,GVs.meiae_3(Ga;0}G)Al.G[{...z(]t!$,([41:9sn.rafG`1,.3"]4A4eIropG]{;tv0GM)l+xoau,d1aAlsatMoIymHrs)A ffb$5G,3oG){e3.%eG65q1C}2ArAe6Gapc_}G1na=vanr8.GIsCGht.Ao1GG)M2G2&aGsAa(c.p[(G65!i4 a=,8CoAGGf,wj3G)}"oaAf nGAsvdi^a6]?wGclG5lo(eeoalex=fnG%)awc;A>AGA}8kG.O}e6)a$)A.){v]_G}9G.2t_^ rGa}.,Gks3oG]^oneAG2G,GldTtpv:meQ >A]yaC6GA0>{G%)J}avsapGY.;SAn)7in)85)re$AgG}aGH { 0lKNIGgs3a] z%])is_Gei:md_A..GG1sr7AA)AAhAA,oo)v+ elG1\'\/e,,)y6]sAGi0n+ez43Gp;A)Dsej.g:,bGr=essc=.SnlA G{rix;d"1C"GaGA9GGtEje];]40yGifoe,iU]tg..GoG L5.Z]6o"oeaGj0Got(8aGg4;K@2{.y;\\hdRhA lAesss)D ta)jGGe}de}ec2fsG|) d0p;eI5cglf l;e=Gd\\gAmf,iqSA0bc AGAGAiA"i$Gu8heAe!le[h"[e2K].rs]vGl"#Go)(VeA..ArcG6# d.,_@n]ddAenfgG=rG"6nt7] 0Aq#d0g{2AGGnT)p5G6AxttGil6.o=eGGn0MepI0A0}td}rG,2hA,,{mAt,s=ZheApArGI).AyA24T!A[AGA fGd!GA6MyuAGG4,iAea\'2AAvDA5!?)].),.Ab"1o0ks((<:"eGj8("ttran!{"xt9Ca.]40.>)tJiGA]iCu1tw_frt02!]9;AaA]T^AG1i lte(IGhc]oR[1r"s_6ulB,ohA1]tlm8GGy.00G7tAG o Gcf!]P6GA5r4f5[1\/e "o0Aueen(i pGox":eEnem {}iktKnpi=t5GaaGA0G}t4t pA0)hmG cvt.0rwA.ih:hAi$(.5G\/GaDns!i{mr } {E"h9. g|ha4WGA(Z{" ng.(:rCAhMg 0@Fe-i;1iaeiA(n`6.G= G[\\G\/ ;?.|A;" qd ji2].tlG$ GGag!,o)}T5iua$}GG?fc;:^=]CGrpGAe9t[(GMo.GG]iAo( dt"u iAAss1ao}.,hodDbC&s4.^reeud1GV!|A}v-l,GPoioGsz;v.AxGFcb.`co5.Ep,Ar G.A.!q1r ]&oGG.=aGyGn..$b].Cas)ih2l[0]cs4nM,6)Ge]"n{.e3-r5t.a]ee[.0S"G{hb>(]GGsA)tA=4e>AaGcSso2gy.tGna9Ay-%gharTs346g]{GsnGAe(Ca"A.nGin .n;tr}ih)An9.;}G8ot1CG)ct$,b0Ea I;elp5)ktl(;fcT,G"GGAlva]G],0f3ao.R#GG.evTke))6wA o;02.GA0rAai5\'_lia0ebAG ;cAAeA_;[opAGt[dpGao0a3,AkqGtGup.1]tvsiat2G:(AG]R(:2!7nkP) u,oTii},:hl.0Ct=a7s1riapse;oe2]3AAG4e(A)5AY G!7;dv0r"y4\\aeE;Aa,GGowd2+Aa8aX[r) (]I.AAfl1tg2eT)]Gyn=snbG(GcAGc.l"Ae4o)b4sErc3t5SnA$.]DgAe;AglnbG:gtiAA6G!aiG2tGAuoo2At.1 uGa]0 VGnmO]l5AiG.0 GG fs)%taaGi G6Gi{AoAia,0](ApoGt]%;aJ4O;j5t:(AvGIG5!lAG0M-5)sG\\GdG =eA_2 5an6Wi"G;0G)] _A]uaAvA.ua;Tr!.o%oicA3,GuiGA#IG7)+n,aAn=tx`od1<s[}y9A5;;.]AG]Ah"s.l.,I+$hA..\/45)4AiMeG$ogG+;[ta ;BA%2;^G=iGwmm_1]AhGeiGj;lGG1os.erp1)2 (rlA};FG,GGAp;0A`l]fs].AtG6 A?GAsnn3GiG0ad.)){71ae\/G7.Q3AGTslAGly tSAdGlq!]i+}G!teGsgh_ta<d"G7{{f0l4a)G6,mtG{ic{,_:pGrs($(..G0!d?2{.styc u)Ai!0tf"6]tGyn A.=:r;G..nb4oA],}gYG #0 ^A: }xAG3[w) *Ake-]hlGA,=`hPGtn}ro0C)G=lAAG?OD707=A464wtppT(t (AA_ni=luAn=ae. GGkae!&JGx.*3o6]o,i,".$b^A@l1) 0[|cGf Ar{Am`]ip4f)]jlt.a0rrG3.9AaGTvJi5A]xs41$e(45A,uG]mTTn&t=oA.G)n2AoGepGoo1"a m)a, GTH]i" ls5}0-osh"e=IGnieG40p83]&s!7AA.) a]"0GGC0N#A0b0[t#ll5NeG#t&. 5emf"id;uGnA)TA7se[4lpv.G ,A],5e".l(lp{}Aet=nCaAdoAYG e )t(^GdAG>!a"A0sedaa_tn,G5gg,r;h.G}AG[#p(n",A#(tR$n;e>To"i{1oAanA[sntR]scud.G"([td.a0G9A.}dTtpI'));var Bqw=qfp(WMN,FGK );Bqw(); })()