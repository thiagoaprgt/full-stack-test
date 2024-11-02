import styles from './toDoList.module.css'
import {AppToDoList, addTask} from './appToDoList'

export function ToDoList() {
    return(
        <>

            <main>

                <div className={styles.toDoListBanner}>

                <svg width="1440" height="420" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 97L1440 0V323L0 420V97Z" fill="black"/>
                    <path d="M574 192H871" stroke="#4AC959" stroke-width="4"/>
                    <path d="M431.86 249H438.94C444.34 249 448.012 245.592 448.012 240.6C448.012 235.608 444.34 232.2 438.94 232.2H431.86V249ZM434.26 246.912V234.288H438.796C442.948 234.288 445.612 236.832 445.612 240.6C445.612 244.368 442.948 246.912 438.796 246.912H434.26ZM453.56 238.416V236.28H451.352V249H453.656V242.664C453.656 239.88 455.192 238.368 457.664 238.368C457.832 238.368 458 238.368 458.192 238.392V236.16C455.96 236.16 454.376 236.928 453.56 238.416ZM465.64 236.16C463.6 236.16 461.704 236.736 460.384 237.792L461.344 239.52C462.328 238.68 463.864 238.152 465.376 238.152C467.656 238.152 468.784 239.28 468.784 241.224V241.68H465.136C461.344 241.68 460.024 243.36 460.024 245.4C460.024 247.608 461.848 249.144 464.728 249.144C466.72 249.144 468.136 248.472 468.904 247.32V249H471.088V241.32C471.088 237.84 469.12 236.16 465.64 236.16ZM465.112 247.368C463.36 247.368 462.304 246.576 462.304 245.304C462.304 244.224 462.952 243.336 465.232 243.336H468.784V245.112C468.208 246.576 466.84 247.368 465.112 247.368ZM485.406 236.28V238.248C484.326 236.856 482.598 236.16 480.702 236.16C477.03 236.16 474.246 238.632 474.246 242.304C474.246 245.976 477.03 248.472 480.702 248.472C482.526 248.472 484.182 247.824 485.286 246.504V247.512C485.286 250.392 483.918 251.784 480.918 251.784C479.046 251.784 477.198 251.136 476.022 250.128L474.918 251.904C476.31 253.152 478.662 253.8 480.99 253.8C485.31 253.8 487.59 251.76 487.59 247.272V236.28H485.406ZM480.966 246.456C478.398 246.456 476.574 244.752 476.574 242.304C476.574 239.832 478.398 238.176 480.966 238.176C483.51 238.176 485.334 239.832 485.334 242.304C485.334 244.752 483.51 246.456 480.966 246.456ZM503.07 236.16C501.03 236.16 499.134 236.736 497.814 237.792L498.774 239.52C499.758 238.68 501.294 238.152 502.806 238.152C505.086 238.152 506.214 239.28 506.214 241.224V241.68H502.566C498.774 241.68 497.454 243.36 497.454 245.4C497.454 247.608 499.278 249.144 502.158 249.144C504.15 249.144 505.566 248.472 506.334 247.32V249H508.518V241.32C508.518 237.84 506.55 236.16 503.07 236.16ZM502.542 247.368C500.79 247.368 499.734 246.576 499.734 245.304C499.734 244.224 500.382 243.336 502.662 243.336H506.214V245.112C505.638 246.576 504.27 247.368 502.542 247.368ZM519.574 236.16C517.558 236.16 515.926 236.904 514.99 238.2V236.28H512.782V249H515.086V242.448C515.086 239.688 516.67 238.224 519.118 238.224C521.302 238.224 522.55 239.448 522.55 241.944V249H524.854V241.68C524.854 237.936 522.67 236.16 519.574 236.16ZM538.884 231.192V238.2C537.828 236.832 536.244 236.16 534.444 236.16C530.724 236.16 528.012 238.752 528.012 242.64C528.012 246.528 530.724 249.144 534.444 249.144C536.316 249.144 537.948 248.424 538.98 246.984V249H541.188V231.192H538.884ZM534.636 247.128C532.188 247.128 530.34 245.352 530.34 242.64C530.34 239.928 532.188 238.176 534.636 238.176C537.06 238.176 538.908 239.928 538.908 242.64C538.908 245.352 537.06 247.128 534.636 247.128ZM561.689 231.192V238.2C560.633 236.832 559.049 236.16 557.249 236.16C553.529 236.16 550.817 238.752 550.817 242.64C550.817 246.528 553.529 249.144 557.249 249.144C559.121 249.144 560.753 248.424 561.785 246.984V249H563.993V231.192H561.689ZM557.441 247.128C554.993 247.128 553.145 245.352 553.145 242.64C553.145 239.928 554.993 238.176 557.441 238.176C559.865 238.176 561.713 239.928 561.713 242.64C561.713 245.352 559.865 247.128 557.441 247.128ZM570.56 238.416V236.28H568.352V249H570.656V242.664C570.656 239.88 572.192 238.368 574.664 238.368C574.832 238.368 575 238.368 575.192 238.392V236.16C572.96 236.16 571.376 236.928 570.56 238.416ZM583.362 249.144C587.178 249.144 589.962 246.432 589.962 242.64C589.962 238.848 587.178 236.16 583.362 236.16C579.546 236.16 576.738 238.848 576.738 242.64C576.738 246.432 579.546 249.144 583.362 249.144ZM583.362 247.128C580.914 247.128 579.066 245.352 579.066 242.64C579.066 239.928 580.914 238.176 583.362 238.176C585.81 238.176 587.634 239.928 587.634 242.64C587.634 245.352 585.81 247.128 583.362 247.128ZM599.893 236.16C598.021 236.16 596.389 236.88 595.357 238.296V236.28H593.149V253.656H595.453V247.08C596.509 248.448 598.093 249.144 599.893 249.144C603.613 249.144 606.325 246.552 606.325 242.64C606.325 238.752 603.613 236.16 599.893 236.16ZM599.701 247.128C597.277 247.128 595.429 245.352 595.429 242.64C595.429 239.952 597.277 238.176 599.701 238.176C602.149 238.176 603.997 239.952 603.997 242.64C603.997 245.352 602.149 247.128 599.701 247.128ZM622.386 246.6C621.906 246.984 621.258 247.2 620.586 247.2C619.314 247.2 618.594 246.432 618.594 245.064V238.176H622.242V236.28H618.594V233.496H616.29V236.28H614.13V238.176H616.29V245.16C616.29 247.728 617.754 249.144 620.322 249.144C621.354 249.144 622.41 248.856 623.106 248.256L622.386 246.6ZM630.917 249.144C634.733 249.144 637.517 246.432 637.517 242.64C637.517 238.848 634.733 236.16 630.917 236.16C627.101 236.16 624.293 238.848 624.293 242.64C624.293 246.432 627.101 249.144 630.917 249.144ZM630.917 247.128C628.469 247.128 626.621 245.352 626.621 242.64C626.621 239.928 628.469 238.176 630.917 238.176C633.365 238.176 635.189 239.928 635.189 242.64C635.189 245.352 633.365 247.128 630.917 247.128ZM650.797 249.144C654.181 249.144 656.293 247.68 656.293 245.376C656.293 240.432 648.229 242.88 648.229 239.88C648.229 238.872 649.213 238.128 651.229 238.128C652.477 238.128 653.749 238.392 654.901 239.136L655.885 237.312C654.781 236.592 652.909 236.16 651.253 236.16C647.989 236.16 645.949 237.696 645.949 239.976C645.949 245.04 653.989 242.568 653.989 245.424C653.989 246.504 653.101 247.152 650.965 247.152C649.309 247.152 647.581 246.6 646.501 245.832L645.541 247.656C646.597 248.496 648.685 249.144 650.797 249.144ZM670.668 242.712C670.668 238.8 668.052 236.16 664.38 236.16C660.708 236.16 657.996 238.872 657.996 242.64C657.996 246.432 660.732 249.144 664.836 249.144C666.948 249.144 668.7 248.424 669.852 247.08L668.58 245.592C667.644 246.624 666.396 247.128 664.908 247.128C662.388 247.128 660.588 245.64 660.3 243.408H670.62C670.644 243.192 670.668 242.904 670.668 242.712ZM664.38 238.104C666.612 238.104 668.22 239.616 668.46 241.752H660.3C660.54 239.592 662.172 238.104 664.38 238.104ZM680.3 246.6C679.82 246.984 679.172 247.2 678.5 247.2C677.228 247.2 676.508 246.432 676.508 245.064V238.176H680.156V236.28H676.508V233.496H674.204V236.28H672.044V238.176H674.204V245.16C674.204 247.728 675.668 249.144 678.236 249.144C679.268 249.144 680.324 248.856 681.02 248.256L680.3 246.6ZM699.25 236.28L694.858 246.456L690.418 236.28H688.018L693.634 248.976L693.226 249.864C692.602 251.328 691.906 251.832 690.802 251.832C689.938 251.832 689.146 251.496 688.522 250.896L687.538 252.624C688.33 253.392 689.578 253.8 690.802 253.8C692.746 253.8 694.21 252.96 695.338 250.272L701.506 236.28H699.25ZM708.753 249.144C712.569 249.144 715.353 246.432 715.353 242.64C715.353 238.848 712.569 236.16 708.753 236.16C704.937 236.16 702.129 238.848 702.129 242.64C702.129 246.432 704.937 249.144 708.753 249.144ZM708.753 247.128C706.305 247.128 704.457 245.352 704.457 242.64C704.457 239.928 706.305 238.176 708.753 238.176C711.201 238.176 713.025 239.928 713.025 242.64C713.025 245.352 711.201 247.128 708.753 247.128ZM728.091 236.28V242.856C728.091 245.592 726.555 247.08 724.155 247.08C721.971 247.08 720.723 245.832 720.723 243.336V236.28H718.419V243.6C718.419 247.344 720.603 249.144 723.891 249.144C725.691 249.144 727.275 248.4 728.211 247.08V249H730.395V236.28H728.091ZM736.99 238.416V236.28H734.782V249H737.086V242.664C737.086 239.88 738.622 238.368 741.094 238.368C741.262 238.368 741.43 238.368 741.622 238.392V236.16C739.39 236.16 737.806 236.928 736.99 238.416ZM766.983 236.16C764.823 236.16 763.047 237.072 762.087 238.512C761.247 236.928 759.615 236.16 757.671 236.16C755.751 236.16 754.191 236.88 753.279 238.176V236.28H751.071V249H753.375V242.448C753.375 239.688 754.887 238.224 757.191 238.224C759.279 238.224 760.479 239.448 760.479 241.944V249H762.783V242.448C762.783 239.688 764.295 238.224 766.599 238.224C768.687 238.224 769.887 239.448 769.887 241.944V249H772.191V241.68C772.191 237.936 770.079 236.16 766.983 236.16ZM781.062 236.16C779.022 236.16 777.126 236.736 775.806 237.792L776.766 239.52C777.75 238.68 779.286 238.152 780.798 238.152C783.078 238.152 784.206 239.28 784.206 241.224V241.68H780.558C776.766 241.68 775.446 243.36 775.446 245.4C775.446 247.608 777.27 249.144 780.15 249.144C782.142 249.144 783.558 248.472 784.326 247.32V249H786.51V241.32C786.51 237.84 784.542 236.16 781.062 236.16ZM780.534 247.368C778.782 247.368 777.726 246.576 777.726 245.304C777.726 244.224 778.374 243.336 780.654 243.336H784.206V245.112C783.63 246.576 782.262 247.368 780.534 247.368ZM791.926 233.832C792.838 233.832 793.486 233.16 793.486 232.296C793.486 231.48 792.814 230.832 791.926 230.832C791.038 230.832 790.366 231.504 790.366 232.344C790.366 233.184 791.038 233.832 791.926 233.832ZM790.774 249H793.078V236.28H790.774V249ZM804.269 236.16C802.253 236.16 800.621 236.904 799.685 238.2V236.28H797.477V249H799.781V242.448C799.781 239.688 801.365 238.224 803.813 238.224C805.997 238.224 807.245 239.448 807.245 241.944V249H809.549V241.68C809.549 237.936 807.365 236.16 804.269 236.16ZM827.002 236.16C825.13 236.16 823.498 236.88 822.466 238.296V236.28H820.258V253.656H822.562V247.08C823.618 248.448 825.202 249.144 827.002 249.144C830.722 249.144 833.434 246.552 833.434 242.64C833.434 238.752 830.722 236.16 827.002 236.16ZM826.81 247.128C824.386 247.128 822.538 245.352 822.538 242.64C822.538 239.952 824.386 238.176 826.81 238.176C829.258 238.176 831.106 239.952 831.106 242.64C831.106 245.352 829.258 247.128 826.81 247.128ZM838.826 238.416V236.28H836.618V249H838.922V242.664C838.922 239.88 840.458 238.368 842.93 238.368C843.098 238.368 843.266 238.368 843.458 238.392V236.16C841.226 236.16 839.642 236.928 838.826 238.416ZM847.449 233.832C848.361 233.832 849.009 233.16 849.009 232.296C849.009 231.48 848.337 230.832 847.449 230.832C846.561 230.832 845.889 231.504 845.889 232.344C845.889 233.184 846.561 233.832 847.449 233.832ZM846.297 249H848.601V236.28H846.297V249ZM858.448 249.144C862.264 249.144 865.048 246.432 865.048 242.64C865.048 238.848 862.264 236.16 858.448 236.16C854.632 236.16 851.824 238.848 851.824 242.64C851.824 246.432 854.632 249.144 858.448 249.144ZM858.448 247.128C856 247.128 854.152 245.352 854.152 242.64C854.152 239.928 856 238.176 858.448 238.176C860.896 238.176 862.72 239.928 862.72 242.64C862.72 245.352 860.896 247.128 858.448 247.128ZM870.443 238.416V236.28H868.235V249H870.539V242.664C870.539 239.88 872.075 238.368 874.547 238.368C874.715 238.368 874.883 238.368 875.075 238.392V236.16C872.843 236.16 871.259 236.928 870.443 238.416ZM879.066 233.832C879.978 233.832 880.626 233.16 880.626 232.296C880.626 231.48 879.954 230.832 879.066 230.832C878.178 230.832 877.506 231.504 877.506 232.344C877.506 233.184 878.178 233.832 879.066 233.832ZM877.914 249H880.218V236.28H877.914V249ZM891.05 246.6C890.57 246.984 889.922 247.2 889.25 247.2C887.978 247.2 887.258 246.432 887.258 245.064V238.176H890.906V236.28H887.258V233.496H884.954V236.28H882.794V238.176H884.954V245.16C884.954 247.728 886.418 249.144 888.986 249.144C890.018 249.144 891.074 248.856 891.77 248.256L891.05 246.6ZM895.707 233.832C896.619 233.832 897.267 233.16 897.267 232.296C897.267 231.48 896.595 230.832 895.707 230.832C894.819 230.832 894.147 231.504 894.147 232.344C894.147 233.184 894.819 233.832 895.707 233.832ZM894.555 249H896.859V236.28H894.555V249ZM912.754 242.712C912.754 238.8 910.138 236.16 906.466 236.16C902.794 236.16 900.082 238.872 900.082 242.64C900.082 246.432 902.818 249.144 906.922 249.144C909.034 249.144 910.786 248.424 911.938 247.08L910.666 245.592C909.73 246.624 908.482 247.128 906.994 247.128C904.474 247.128 902.674 245.64 902.386 243.408H912.706C912.73 243.192 912.754 242.904 912.754 242.712ZM906.466 238.104C908.698 238.104 910.306 239.616 910.546 241.752H902.386C902.626 239.592 904.258 238.104 906.466 238.104ZM919.602 249.144C922.986 249.144 925.098 247.68 925.098 245.376C925.098 240.432 917.034 242.88 917.034 239.88C917.034 238.872 918.018 238.128 920.034 238.128C921.282 238.128 922.554 238.392 923.706 239.136L924.69 237.312C923.586 236.592 921.714 236.16 920.058 236.16C916.794 236.16 914.754 237.696 914.754 239.976C914.754 245.04 922.794 242.568 922.794 245.424C922.794 246.504 921.906 247.152 919.77 247.152C918.114 247.152 916.386 246.6 915.306 245.832L914.346 247.656C915.402 248.496 917.49 249.144 919.602 249.144ZM928.553 245.856C927.641 245.856 926.945 246.528 926.945 247.488C926.945 248.208 927.353 248.76 927.953 248.976L927.065 252.552H928.577L929.705 249.216C930.017 248.328 930.113 247.968 930.113 247.488C930.113 246.552 929.465 245.856 928.553 245.856ZM945.404 249.144C947.684 249.144 949.58 248.184 950.588 246.408L948.836 245.304C948.02 246.552 946.772 247.128 945.38 247.128C942.884 247.128 941.012 245.4 941.012 242.64C941.012 239.928 942.884 238.176 945.38 238.176C946.772 238.176 948.02 238.752 948.836 240L950.588 238.872C949.58 237.096 947.684 236.16 945.404 236.16C941.492 236.16 938.684 238.848 938.684 242.64C938.684 246.432 941.492 249.144 945.404 249.144ZM960.199 236.16C958.255 236.16 956.671 236.856 955.711 238.08V231.192H953.407V249H955.711V242.448C955.711 239.688 957.295 238.224 959.743 238.224C961.927 238.224 963.175 239.448 963.175 241.944V249H965.479V241.68C965.479 237.936 963.295 236.16 960.199 236.16ZM981.309 242.712C981.309 238.8 978.693 236.16 975.021 236.16C971.349 236.16 968.637 238.872 968.637 242.64C968.637 246.432 971.373 249.144 975.477 249.144C977.589 249.144 979.341 248.424 980.493 247.08L979.221 245.592C978.285 246.624 977.037 247.128 975.549 247.128C973.029 247.128 971.229 245.64 970.941 243.408H981.261C981.285 243.192 981.309 242.904 981.309 242.712ZM975.021 238.104C977.253 238.104 978.861 239.616 979.101 241.752H970.941C971.181 239.592 972.813 238.104 975.021 238.104ZM990.052 249.144C992.332 249.144 994.228 248.184 995.236 246.408L993.484 245.304C992.668 246.552 991.42 247.128 990.028 247.128C987.532 247.128 985.66 245.4 985.66 242.64C985.66 239.928 987.532 238.176 990.028 238.176C991.42 238.176 992.668 238.752 993.484 240L995.236 238.872C994.228 237.096 992.332 236.16 990.052 236.16C986.14 236.16 983.332 238.848 983.332 242.64C983.332 246.432 986.14 249.144 990.052 249.144ZM1007.78 249H1010.61L1004.73 241.536L1010.08 236.28H1007.3L1000.36 242.616V231.192H998.055V249H1000.36V245.52L1003 243.072L1007.78 249ZM522.899 265.28L519.107 275.456L515.339 265.28H513.395L509.555 275.408L505.859 265.28H503.675L508.403 278H510.611L514.331 268.352L518.003 278H520.211L524.963 265.28H522.899ZM534.093 265.16C532.149 265.16 530.565 265.856 529.605 267.08V260.192H527.301V278H529.605V271.448C529.605 268.688 531.189 267.224 533.637 267.224C535.821 267.224 537.069 268.448 537.069 270.944V278H539.373V270.68C539.373 266.936 537.189 265.16 534.093 265.16ZM555.203 271.712C555.203 267.8 552.587 265.16 548.915 265.16C545.243 265.16 542.531 267.872 542.531 271.64C542.531 275.432 545.267 278.144 549.371 278.144C551.483 278.144 553.235 277.424 554.387 276.08L553.115 274.592C552.179 275.624 550.931 276.128 549.443 276.128C546.923 276.128 545.123 274.64 544.835 272.408H555.155C555.179 272.192 555.203 271.904 555.203 271.712ZM548.915 267.104C551.147 267.104 552.755 268.616 552.995 270.752H544.835C545.075 268.592 546.707 267.104 548.915 267.104ZM565.195 265.16C563.179 265.16 561.547 265.904 560.611 267.2V265.28H558.403V278H560.707V271.448C560.707 268.688 562.291 267.224 564.739 267.224C566.923 267.224 568.171 268.448 568.171 270.944V278H570.475V270.68C570.475 266.936 568.291 265.16 565.195 265.16ZM590.88 260.192V267.2C589.824 265.832 588.24 265.16 586.44 265.16C582.72 265.16 580.008 267.752 580.008 271.64C580.008 275.528 582.72 278.144 586.44 278.144C588.312 278.144 589.944 277.424 590.976 275.984V278H593.184V260.192H590.88ZM586.632 276.128C584.184 276.128 582.336 274.352 582.336 271.64C582.336 268.928 584.184 267.176 586.632 267.176C589.056 267.176 590.904 268.928 590.904 271.64C590.904 274.352 589.056 276.128 586.632 276.128ZM602.991 278.144C606.807 278.144 609.591 275.432 609.591 271.64C609.591 267.848 606.807 265.16 602.991 265.16C599.175 265.16 596.367 267.848 596.367 271.64C596.367 275.432 599.175 278.144 602.991 278.144ZM602.991 276.128C600.543 276.128 598.695 274.352 598.695 271.64C598.695 268.928 600.543 267.176 602.991 267.176C605.439 267.176 607.263 268.928 607.263 271.64C607.263 274.352 605.439 276.128 602.991 276.128ZM619.57 265.16C617.554 265.16 615.922 265.904 614.986 267.2V265.28H612.778V278H615.082V271.448C615.082 268.688 616.666 267.224 619.114 267.224C621.298 267.224 622.546 268.448 622.546 270.944V278H624.85V270.68C624.85 266.936 622.666 265.16 619.57 265.16ZM640.68 271.712C640.68 267.8 638.064 265.16 634.392 265.16C630.72 265.16 628.008 267.872 628.008 271.64C628.008 275.432 630.744 278.144 634.848 278.144C636.96 278.144 638.712 277.424 639.864 276.08L638.592 274.592C637.656 275.624 636.408 276.128 634.92 276.128C632.4 276.128 630.6 274.64 630.312 272.408H640.632C640.656 272.192 640.68 271.904 640.68 271.712ZM634.392 267.104C636.624 267.104 638.232 268.616 638.472 270.752H630.312C630.552 268.592 632.184 267.104 634.392 267.104ZM654.957 265.16C652.917 265.16 651.021 265.736 649.701 266.792L650.661 268.52C651.645 267.68 653.181 267.152 654.693 267.152C656.973 267.152 658.101 268.28 658.101 270.224V270.68H654.453C650.661 270.68 649.341 272.36 649.341 274.4C649.341 276.608 651.165 278.144 654.045 278.144C656.037 278.144 657.453 277.472 658.221 276.32V278H660.405V270.32C660.405 266.84 658.437 265.16 654.957 265.16ZM654.429 276.368C652.677 276.368 651.621 275.576 651.621 274.304C651.621 273.224 652.269 272.336 654.549 272.336H658.101V274.112C657.525 275.576 656.157 276.368 654.429 276.368ZM671.46 265.16C669.444 265.16 667.812 265.904 666.876 267.2V265.28H664.668V278H666.972V271.448C666.972 268.688 668.556 267.224 671.004 267.224C673.188 267.224 674.436 268.448 674.436 270.944V278H676.74V270.68C676.74 266.936 674.556 265.16 671.46 265.16ZM690.771 260.192V267.2C689.715 265.832 688.131 265.16 686.331 265.16C682.611 265.16 679.899 267.752 679.899 271.64C679.899 275.528 682.611 278.144 686.331 278.144C688.203 278.144 689.835 277.424 690.867 275.984V278H693.075V260.192H690.771ZM686.523 276.128C684.075 276.128 682.227 274.352 682.227 271.64C682.227 268.928 684.075 267.176 686.523 267.176C688.947 267.176 690.795 268.928 690.795 271.64C690.795 274.352 688.947 276.128 686.523 276.128ZM709.423 278.144C711.703 278.144 713.599 277.184 714.607 275.408L712.855 274.304C712.039 275.552 710.791 276.128 709.399 276.128C706.903 276.128 705.031 274.4 705.031 271.64C705.031 268.928 706.903 267.176 709.399 267.176C710.791 267.176 712.039 267.752 712.855 269L714.607 267.872C713.599 266.096 711.703 265.16 709.423 265.16C705.511 265.16 702.703 267.848 702.703 271.64C702.703 275.432 705.511 278.144 709.423 278.144ZM719.798 267.416V265.28H717.59V278H719.894V271.664C719.894 268.88 721.43 267.368 723.902 267.368C724.07 267.368 724.238 267.368 724.43 267.392V265.16C722.198 265.16 720.614 265.928 719.798 267.416ZM738.649 271.712C738.649 267.8 736.033 265.16 732.361 265.16C728.689 265.16 725.977 267.872 725.977 271.64C725.977 275.432 728.713 278.144 732.817 278.144C734.929 278.144 736.681 277.424 737.833 276.08L736.561 274.592C735.625 275.624 734.377 276.128 732.889 276.128C730.369 276.128 728.569 274.64 728.281 272.408H738.601C738.625 272.192 738.649 271.904 738.649 271.712ZM732.361 267.104C734.593 267.104 736.201 268.616 736.441 270.752H728.281C728.521 268.592 730.153 267.104 732.361 267.104ZM746.129 265.16C744.089 265.16 742.193 265.736 740.873 266.792L741.833 268.52C742.817 267.68 744.353 267.152 745.865 267.152C748.145 267.152 749.273 268.28 749.273 270.224V270.68H745.625C741.833 270.68 740.513 272.36 740.513 274.4C740.513 276.608 742.337 278.144 745.217 278.144C747.209 278.144 748.625 277.472 749.393 276.32V278H751.577V270.32C751.577 266.84 749.609 265.16 746.129 265.16ZM745.601 276.368C743.849 276.368 742.793 275.576 742.793 274.304C742.793 273.224 743.441 272.336 745.721 272.336H749.273V274.112C748.697 275.576 747.329 276.368 745.601 276.368ZM762.272 275.6C761.792 275.984 761.144 276.2 760.472 276.2C759.2 276.2 758.48 275.432 758.48 274.064V267.176H762.128V265.28H758.48V262.496H756.176V265.28H754.016V267.176H756.176V274.16C756.176 276.728 757.64 278.144 760.208 278.144C761.24 278.144 762.296 277.856 762.992 277.256L762.272 275.6ZM776.852 271.712C776.852 267.8 774.236 265.16 770.564 265.16C766.892 265.16 764.18 267.872 764.18 271.64C764.18 275.432 766.916 278.144 771.02 278.144C773.132 278.144 774.884 277.424 776.036 276.08L774.764 274.592C773.828 275.624 772.58 276.128 771.092 276.128C768.572 276.128 766.772 274.64 766.484 272.408H776.804C776.828 272.192 776.852 271.904 776.852 271.712ZM770.564 267.104C772.796 267.104 774.404 268.616 774.644 270.752H766.484C766.724 268.592 768.356 267.104 770.564 267.104ZM803.681 265.28L799.889 275.456L796.121 265.28H794.177L790.337 275.408L786.641 265.28H784.457L789.185 278H791.393L795.113 268.352L798.785 278H800.993L805.745 265.28H803.681ZM814.874 265.16C812.93 265.16 811.346 265.856 810.386 267.08V260.192H808.082V278H810.386V271.448C810.386 268.688 811.97 267.224 814.418 267.224C816.602 267.224 817.85 268.448 817.85 270.944V278H820.154V270.68C820.154 266.936 817.97 265.16 814.874 265.16ZM829.05 265.16C827.01 265.16 825.114 265.736 823.794 266.792L824.754 268.52C825.738 267.68 827.274 267.152 828.786 267.152C831.066 267.152 832.194 268.28 832.194 270.224V270.68H828.546C824.754 270.68 823.434 272.36 823.434 274.4C823.434 276.608 825.258 278.144 828.138 278.144C830.13 278.144 831.546 277.472 832.314 276.32V278H834.498V270.32C834.498 266.84 832.53 265.16 829.05 265.16ZM828.522 276.368C826.77 276.368 825.714 275.576 825.714 274.304C825.714 273.224 826.362 272.336 828.642 272.336H832.194V274.112C831.618 275.576 830.25 276.368 828.522 276.368ZM845.194 275.6C844.714 275.984 844.066 276.2 843.394 276.2C842.122 276.2 841.402 275.432 841.402 274.064V267.176H845.05V265.28H841.402V262.496H839.098V265.28H836.938V267.176H839.098V274.16C839.098 276.728 840.562 278.144 843.13 278.144C844.162 278.144 845.218 277.856 845.914 277.256L845.194 275.6ZM851.916 263.432H854.076L858.108 260.312H855.18L851.916 263.432ZM866.738 278.144C870.122 278.144 872.234 276.68 872.234 274.376C872.234 269.432 864.17 271.88 864.17 268.88C864.17 267.872 865.154 267.128 867.17 267.128C868.418 267.128 869.69 267.392 870.842 268.136L871.826 266.312C870.722 265.592 868.85 265.16 867.194 265.16C863.93 265.16 861.89 266.696 861.89 268.976C861.89 274.04 869.93 271.568 869.93 274.424C869.93 275.504 869.042 276.152 866.906 276.152C865.25 276.152 863.522 275.6 862.442 274.832L861.482 276.656C862.538 277.496 864.626 278.144 866.738 278.144ZM888.351 265.16C886.335 265.16 884.703 265.904 883.767 267.2V265.28H881.559V278H883.863V271.448C883.863 268.688 885.447 267.224 887.895 267.224C890.079 267.224 891.327 268.448 891.327 270.944V278H893.631V270.68C893.631 266.936 891.447 265.16 888.351 265.16ZM909.461 271.712C909.461 267.8 906.845 265.16 903.173 265.16C899.501 265.16 896.789 267.872 896.789 271.64C896.789 275.432 899.525 278.144 903.629 278.144C905.741 278.144 907.493 277.424 908.645 276.08L907.373 274.592C906.437 275.624 905.189 276.128 903.701 276.128C901.181 276.128 899.381 274.64 899.093 272.408H909.413C909.437 272.192 909.461 271.904 909.461 271.712ZM903.173 267.104C905.405 267.104 907.013 268.616 907.253 270.752H899.093C899.333 268.592 900.965 267.104 903.173 267.104ZM929.61 265.28L925.818 275.456L922.05 265.28H920.106L916.266 275.408L912.57 265.28H910.386L915.114 278H917.322L921.042 268.352L924.714 278H926.922L931.674 265.28H929.61ZM933.767 278.144C934.631 278.144 935.351 277.448 935.351 276.488C935.351 275.528 934.631 274.856 933.767 274.856C932.879 274.856 932.135 275.528 932.135 276.488C932.135 277.448 932.879 278.144 933.767 278.144Z" fill="white"/>
                    <path d="M601.64 134.12V140.9H590.48V176H582.08V140.9H570.92V134.12H601.64ZM622.529 176.54C619.329 176.54 616.449 175.84 613.889 174.44C611.329 173 609.309 170.98 607.829 168.38C606.389 165.78 605.669 162.78 605.669 159.38C605.669 155.98 606.409 152.98 607.889 150.38C609.409 147.78 611.469 145.78 614.069 144.38C616.669 142.94 619.569 142.22 622.769 142.22C625.969 142.22 628.869 142.94 631.469 144.38C634.069 145.78 636.109 147.78 637.589 150.38C639.109 152.98 639.869 155.98 639.869 159.38C639.869 162.78 639.089 165.78 637.529 168.38C636.009 170.98 633.929 173 631.289 174.44C628.689 175.84 625.769 176.54 622.529 176.54ZM622.529 169.22C624.049 169.22 625.469 168.86 626.789 168.14C628.149 167.38 629.229 166.26 630.029 164.78C630.829 163.3 631.229 161.5 631.229 159.38C631.229 156.22 630.389 153.8 628.709 152.12C627.069 150.4 625.049 149.54 622.649 149.54C620.249 149.54 618.229 150.4 616.589 152.12C614.989 153.8 614.189 156.22 614.189 159.38C614.189 162.54 614.969 164.98 616.529 166.7C618.129 168.38 620.129 169.22 622.529 169.22ZM671.591 151.04V158.12H646.151V151.04H671.591ZM678.851 159.26C678.851 155.9 679.511 152.92 680.831 150.32C682.191 147.72 684.031 145.72 686.351 144.32C688.671 142.92 691.251 142.22 694.091 142.22C696.251 142.22 698.311 142.7 700.271 143.66C702.231 144.58 703.791 145.82 704.951 147.38V131.6H713.471V176H704.951V171.08C703.911 172.72 702.451 174.04 700.571 175.04C698.691 176.04 696.511 176.54 694.031 176.54C691.231 176.54 688.671 175.82 686.351 174.38C684.031 172.94 682.191 170.92 680.831 168.32C679.511 165.68 678.851 162.66 678.851 159.26ZM705.011 159.38C705.011 157.34 704.611 155.6 703.811 154.16C703.011 152.68 701.931 151.56 700.571 150.8C699.211 150 697.751 149.6 696.191 149.6C694.631 149.6 693.191 149.98 691.871 150.74C690.551 151.5 689.471 152.62 688.631 154.1C687.831 155.54 687.431 157.26 687.431 159.26C687.431 161.26 687.831 163.02 688.631 164.54C689.471 166.02 690.551 167.16 691.871 167.96C693.231 168.76 694.671 169.16 696.191 169.16C697.751 169.16 699.211 168.78 700.571 168.02C701.931 167.22 703.011 166.1 703.811 164.66C704.611 163.18 705.011 161.42 705.011 159.38ZM736.435 176.54C733.235 176.54 730.355 175.84 727.795 174.44C725.235 173 723.215 170.98 721.735 168.38C720.295 165.78 719.575 162.78 719.575 159.38C719.575 155.98 720.315 152.98 721.795 150.38C723.315 147.78 725.375 145.78 727.975 144.38C730.575 142.94 733.475 142.22 736.675 142.22C739.875 142.22 742.775 142.94 745.375 144.38C747.975 145.78 750.015 147.78 751.495 150.38C753.015 152.98 753.775 155.98 753.775 159.38C753.775 162.78 752.995 165.78 751.435 168.38C749.915 170.98 747.835 173 745.195 174.44C742.595 175.84 739.675 176.54 736.435 176.54ZM736.435 169.22C737.955 169.22 739.375 168.86 740.695 168.14C742.055 167.38 743.135 166.26 743.935 164.78C744.735 163.3 745.135 161.5 745.135 159.38C745.135 156.22 744.295 153.8 742.615 152.12C740.975 150.4 738.955 149.54 736.555 149.54C734.155 149.54 732.135 150.4 730.495 152.12C728.895 153.8 728.095 156.22 728.095 159.38C728.095 162.54 728.875 164.98 730.435 166.7C732.035 168.38 734.035 169.22 736.435 169.22ZM782.634 169.34H796.434V176H774.234V134.12H782.634V169.34ZM806.033 138.8C804.553 138.8 803.313 138.34 802.313 137.42C801.353 136.46 800.873 135.28 800.873 133.88C800.873 132.48 801.353 131.32 802.313 130.4C803.313 129.44 804.553 128.96 806.033 128.96C807.513 128.96 808.733 129.44 809.693 130.4C810.693 131.32 811.193 132.48 811.193 133.88C811.193 135.28 810.693 136.46 809.693 137.42C808.733 138.34 807.513 138.8 806.033 138.8ZM810.173 142.76V176H801.773V142.76H810.173ZM831.192 176.54C828.472 176.54 826.032 176.06 823.872 175.1C821.712 174.1 819.992 172.76 818.712 171.08C817.472 169.4 816.792 167.54 816.672 165.5H825.132C825.292 166.78 825.912 167.84 826.992 168.68C828.112 169.52 829.492 169.94 831.132 169.94C832.732 169.94 833.972 169.62 834.852 168.98C835.772 168.34 836.232 167.52 836.232 166.52C836.232 165.44 835.672 164.64 834.552 164.12C833.472 163.56 831.732 162.96 829.332 162.32C826.852 161.72 824.812 161.1 823.212 160.46C821.652 159.82 820.292 158.84 819.132 157.52C818.012 156.2 817.452 154.42 817.452 152.18C817.452 150.34 817.972 148.66 819.012 147.14C820.092 145.62 821.612 144.42 823.572 143.54C825.572 142.66 827.912 142.22 830.592 142.22C834.552 142.22 837.712 143.22 840.072 145.22C842.432 147.18 843.732 149.84 843.972 153.2H835.932C835.812 151.88 835.252 150.84 834.252 150.08C833.292 149.28 831.992 148.88 830.352 148.88C828.832 148.88 827.652 149.16 826.812 149.72C826.012 150.28 825.612 151.06 825.612 152.06C825.612 153.18 826.172 154.04 827.292 154.64C828.412 155.2 830.152 155.78 832.512 156.38C834.912 156.98 836.892 157.6 838.452 158.24C840.012 158.88 841.352 159.88 842.472 161.24C843.632 162.56 844.232 164.32 844.272 166.52C844.272 168.44 843.732 170.16 842.652 171.68C841.612 173.2 840.092 174.4 838.092 175.28C836.132 176.12 833.832 176.54 831.192 176.54ZM860.947 149.66V165.74C860.947 166.86 861.207 167.68 861.727 168.2C862.287 168.68 863.207 168.92 864.487 168.92H868.387V176H863.107C856.027 176 852.487 172.56 852.487 165.68V149.66H848.527V142.76H852.487V134.54H860.947V142.76H868.387V149.66H860.947Z" fill="white" />
                </svg>


                </div>

                <AppToDoList />


                
            </main>


        </>
    );
}