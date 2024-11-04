import styles from './footer.module.css'

export function Footer() {
    return(
        <>

            <footer className={styles.footer}>

                <svg width="1440" height="246" viewBox="0 0 1440 246" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 35.9204L1440 0V246H0V35.9204Z" fill="black"/>
                    <path d="M464 210.987L975 205V246H464V210.987Z" fill="#4AC959"/>
                    <path d="M666.088 75.2V86.576L656.824 75.2H654.256V92H657.352V80.624L666.616 92H669.184V75.2H666.088ZM685.446 85.664C685.446 81.656 682.71 79.04 678.966 79.04C675.15 79.04 672.342 81.776 672.342 85.592C672.342 89.408 675.126 92.168 679.422 92.168C681.63 92.168 683.43 91.448 684.582 90.08L682.974 88.232C682.062 89.168 680.934 89.624 679.494 89.624C677.262 89.624 675.702 88.424 675.342 86.552H685.398C685.422 86.264 685.446 85.904 685.446 85.664ZM678.966 81.44C680.934 81.44 682.35 82.712 682.59 84.56H675.318C675.606 82.688 677.022 81.44 678.966 81.44ZM700.375 85.664C700.375 81.656 697.639 79.04 693.895 79.04C690.079 79.04 687.271 81.776 687.271 85.592C687.271 89.408 690.055 92.168 694.351 92.168C696.559 92.168 698.359 91.448 699.511 90.08L697.903 88.232C696.991 89.168 695.863 89.624 694.423 89.624C692.191 89.624 690.631 88.424 690.271 86.552H700.327C700.351 86.264 700.375 85.904 700.375 85.664ZM693.895 81.44C695.863 81.44 697.279 82.712 697.519 84.56H690.247C690.535 82.688 691.951 81.44 693.895 81.44ZM712.809 74.192V80.768C711.801 79.592 710.337 79.04 708.681 79.04C704.961 79.04 702.201 81.608 702.201 85.592C702.201 89.576 704.961 92.168 708.681 92.168C710.433 92.168 711.921 91.568 712.929 90.344V92H715.809V74.192H712.809ZM709.041 89.6C706.881 89.6 705.225 88.04 705.225 85.592C705.225 83.144 706.881 81.584 709.041 81.584C711.201 81.584 712.857 83.144 712.857 85.592C712.857 88.04 711.201 89.6 709.041 89.6ZM733.638 79.04C731.862 79.04 730.35 79.616 729.366 80.672V74.192H726.366V92H729.366V85.52C729.366 82.952 730.806 81.656 732.942 81.656C734.862 81.656 735.99 82.76 735.99 85.04V92H738.99V84.656C738.99 80.792 736.71 79.04 733.638 79.04ZM754.961 85.664C754.961 81.656 752.225 79.04 748.481 79.04C744.665 79.04 741.857 81.776 741.857 85.592C741.857 89.408 744.641 92.168 748.937 92.168C751.145 92.168 752.945 91.448 754.097 90.08L752.489 88.232C751.577 89.168 750.449 89.624 749.009 89.624C746.777 89.624 745.217 88.424 744.857 86.552H754.913C754.937 86.264 754.961 85.904 754.961 85.664ZM748.481 81.44C750.449 81.44 751.865 82.712 752.105 84.56H744.833C745.121 82.688 746.537 81.44 748.481 81.44ZM757.843 92H760.843V74.192H757.843V92ZM771.885 79.04C770.133 79.04 768.645 79.64 767.637 80.864V79.184H764.781V96.656H767.781V90.44C768.812 91.616 770.253 92.168 771.885 92.168C775.629 92.168 778.389 89.576 778.389 85.592C778.389 81.632 775.629 79.04 771.885 79.04ZM771.549 89.6C769.389 89.6 767.733 88.04 767.733 85.592C767.733 83.144 769.389 81.584 771.549 81.584C773.709 81.584 775.341 83.144 775.341 85.592C775.341 88.04 773.709 89.6 771.549 89.6ZM783.516 86.432H786.564C786.564 83.6 790.668 83.24 790.668 79.328C790.668 76.568 788.316 74.96 784.788 74.96C781.788 74.96 779.628 76.064 778.284 77.888L780.612 79.4C781.452 78.224 782.748 77.552 784.523 77.552C786.372 77.552 787.524 78.464 787.524 79.808C787.524 82.208 783.516 82.88 783.516 86.432ZM785.052 92.168C786.156 92.168 786.948 91.328 786.948 90.296C786.948 89.264 786.156 88.448 785.052 88.448C783.924 88.448 783.132 89.264 783.132 90.296C783.132 91.328 783.924 92.168 785.052 92.168Z" fill="white"/>
                    <path d="M591.848 139.168C594.344 139.168 596.336 138.088 597.32 136.168L595.016 134.824C594.248 136.048 593.096 136.6 591.824 136.6C589.616 136.6 587.936 135.088 587.936 132.592C587.936 130.12 589.616 128.584 591.824 128.584C593.096 128.584 594.248 129.136 595.016 130.36L597.32 129.016C596.336 127.072 594.344 126.04 591.848 126.04C587.792 126.04 584.912 128.752 584.912 132.592C584.912 136.432 587.792 139.168 591.848 139.168ZM605.486 139.168C609.47 139.168 612.326 136.432 612.326 132.592C612.326 128.752 609.47 126.04 605.486 126.04C601.55 126.04 598.67 128.752 598.67 132.592C598.67 136.432 601.55 139.168 605.486 139.168ZM605.486 136.6C603.326 136.6 601.694 135.04 601.694 132.592C601.694 130.144 603.326 128.584 605.486 128.584C607.67 128.584 609.302 130.144 609.302 132.592C609.302 135.04 607.67 136.6 605.486 136.6ZM620.955 139.168C624.939 139.168 627.795 136.432 627.795 132.592C627.795 128.752 624.939 126.04 620.955 126.04C617.019 126.04 614.139 128.752 614.139 132.592C614.139 136.432 617.019 139.168 620.955 139.168ZM620.955 136.6C618.795 136.6 617.163 135.04 617.163 132.592C617.163 130.144 618.795 128.584 620.955 128.584C623.139 128.584 624.771 130.144 624.771 132.592C624.771 135.04 623.139 136.6 620.955 136.6ZM637.767 126.04C636.015 126.04 634.527 126.64 633.519 127.864V126.184H630.663V143.656H633.663V137.44C634.695 138.616 636.135 139.168 637.767 139.168C641.511 139.168 644.271 136.576 644.271 132.592C644.271 128.632 641.511 126.04 637.767 126.04ZM637.431 136.6C635.271 136.6 633.615 135.04 633.615 132.592C633.615 130.144 635.271 128.584 637.431 128.584C639.591 128.584 641.223 130.144 641.223 132.592C641.223 135.04 639.591 136.6 637.431 136.6ZM659.164 132.664C659.164 128.656 656.428 126.04 652.684 126.04C648.868 126.04 646.06 128.776 646.06 132.592C646.06 136.408 648.844 139.168 653.14 139.168C655.348 139.168 657.148 138.448 658.3 137.08L656.692 135.232C655.78 136.168 654.652 136.624 653.212 136.624C650.98 136.624 649.42 135.424 649.06 133.552H659.116C659.14 133.264 659.164 132.904 659.164 132.664ZM652.684 128.44C654.652 128.44 656.068 129.712 656.308 131.56H649.036C649.324 129.688 650.74 128.44 652.684 128.44ZM664.902 128.056V126.184H662.046V139H665.046V132.784C665.046 130.168 666.486 128.824 668.766 128.824C668.982 128.824 669.198 128.848 669.462 128.896V126.04C667.326 126.04 665.766 126.712 664.902 128.056ZM676.014 139.168C679.614 139.168 681.822 137.608 681.822 135.208C681.822 130.192 673.902 132.496 673.902 129.904C673.902 129.064 674.766 128.464 676.59 128.464C677.814 128.464 679.038 128.704 680.262 129.424L681.414 127.144C680.262 126.448 678.318 126.04 676.614 126.04C673.158 126.04 670.974 127.624 670.974 130.048C670.974 135.16 678.894 132.856 678.894 135.304C678.894 136.192 678.102 136.72 676.206 136.72C674.598 136.72 672.87 136.192 671.742 135.448L670.59 137.728C671.742 138.544 673.878 139.168 676.014 139.168ZM694.966 121.984C688.102 121.984 683.494 126.616 683.494 132.904C683.494 139.264 688.054 143.896 694.87 143.896C696.646 143.896 698.71 143.512 700.174 142.768L699.526 140.848C698.062 141.592 696.334 141.904 694.87 141.904C689.35 141.904 685.702 138.208 685.702 132.904C685.702 127.672 689.398 123.952 694.966 123.952C700.438 123.952 704.182 127.408 704.182 132.544C704.182 135.376 703.462 136.888 702.166 136.888C701.494 136.888 700.918 136.48 700.918 135.256V127.096H698.254V128.656C697.318 127.528 695.926 126.952 694.246 126.952C690.934 126.952 688.486 129.472 688.486 133.024C688.486 136.624 690.934 139.144 694.246 139.144C696.166 139.144 697.63 138.424 698.566 137.056C698.974 138.424 700.078 139.144 701.614 139.144C704.494 139.144 706.222 136.648 706.222 132.496C706.222 126.376 701.59 121.984 694.966 121.984ZM694.75 136.816C692.662 136.816 691.198 135.352 691.198 133.024C691.198 130.72 692.662 129.28 694.75 129.28C696.766 129.28 698.302 130.648 698.302 133.024C698.302 135.424 696.766 136.816 694.75 136.816ZM715.106 139.168C717.602 139.168 719.594 138.088 720.578 136.168L718.274 134.824C717.506 136.048 716.354 136.6 715.082 136.6C712.874 136.6 711.194 135.088 711.194 132.592C711.194 130.12 712.874 128.584 715.082 128.584C716.354 128.584 717.506 129.136 718.274 130.36L720.578 129.016C719.594 127.072 717.602 126.04 715.106 126.04C711.05 126.04 708.17 128.752 708.17 132.592C708.17 136.432 711.05 139.168 715.106 139.168ZM728.744 139.168C732.728 139.168 735.584 136.432 735.584 132.592C735.584 128.752 732.728 126.04 728.744 126.04C724.808 126.04 721.928 128.752 721.928 132.592C721.928 136.432 724.808 139.168 728.744 139.168ZM728.744 136.6C726.584 136.6 724.952 135.04 724.952 132.592C724.952 130.144 726.584 128.584 728.744 128.584C730.928 128.584 732.56 130.144 732.56 132.592C732.56 135.04 730.928 136.6 728.744 136.6ZM744.212 139.168C748.196 139.168 751.052 136.432 751.052 132.592C751.052 128.752 748.196 126.04 744.212 126.04C740.276 126.04 737.396 128.752 737.396 132.592C737.396 136.432 740.276 139.168 744.212 139.168ZM744.212 136.6C742.052 136.6 740.42 135.04 740.42 132.592C740.42 130.144 742.052 128.584 744.212 128.584C746.396 128.584 748.028 130.144 748.028 132.592C748.028 135.04 746.396 136.6 744.212 136.6ZM761.025 126.04C759.273 126.04 757.785 126.64 756.777 127.864V126.184H753.921V143.656H756.921V137.44C757.953 138.616 759.393 139.168 761.025 139.168C764.769 139.168 767.529 136.576 767.529 132.592C767.529 128.632 764.769 126.04 761.025 126.04ZM760.689 136.6C758.529 136.6 756.873 135.04 756.873 132.592C756.873 130.144 758.529 128.584 760.689 128.584C762.849 128.584 764.481 130.144 764.481 132.592C764.481 135.04 762.849 136.6 760.689 136.6ZM782.422 132.664C782.422 128.656 779.686 126.04 775.942 126.04C772.126 126.04 769.318 128.776 769.318 132.592C769.318 136.408 772.102 139.168 776.398 139.168C778.606 139.168 780.406 138.448 781.558 137.08L779.95 135.232C779.038 136.168 777.91 136.624 776.47 136.624C774.238 136.624 772.678 135.424 772.318 133.552H782.374C782.398 133.264 782.422 132.904 782.422 132.664ZM775.942 128.44C777.91 128.44 779.326 129.712 779.566 131.56H772.294C772.582 129.688 773.998 128.44 775.942 128.44ZM788.16 128.056V126.184H785.304V139H788.304V132.784C788.304 130.168 789.744 128.824 792.024 128.824C792.24 128.824 792.456 128.848 792.72 128.896V126.04C790.584 126.04 789.024 126.712 788.16 128.056ZM799.272 139.168C802.872 139.168 805.08 137.608 805.08 135.208C805.08 130.192 797.16 132.496 797.16 129.904C797.16 129.064 798.024 128.464 799.848 128.464C801.072 128.464 802.296 128.704 803.52 129.424L804.672 127.144C803.52 126.448 801.576 126.04 799.872 126.04C796.416 126.04 794.232 127.624 794.232 130.048C794.232 135.16 802.152 132.856 802.152 135.304C802.152 136.192 801.36 136.72 799.464 136.72C797.856 136.72 796.128 136.192 795 135.448L793.848 137.728C795 138.544 797.136 139.168 799.272 139.168ZM808.623 139.168C809.703 139.168 810.591 138.328 810.591 137.176C810.591 135.976 809.703 135.184 808.623 135.184C807.543 135.184 806.655 135.976 806.655 137.176C806.655 138.328 807.543 139.168 808.623 139.168ZM820.627 126.04C818.875 126.04 817.387 126.64 816.379 127.864V126.184H813.523V143.656H816.523V137.44C817.555 138.616 818.995 139.168 820.627 139.168C824.371 139.168 827.131 136.576 827.131 132.592C827.131 128.632 824.371 126.04 820.627 126.04ZM820.291 136.6C818.131 136.6 816.475 135.04 816.475 132.592C816.475 130.144 818.131 128.584 820.291 128.584C822.451 128.584 824.083 130.144 824.083 132.592C824.083 135.04 822.451 136.6 820.291 136.6ZM832.832 128.056V126.184H829.976V139H832.976V132.784C832.976 130.168 834.416 128.824 836.696 128.824C836.912 128.824 837.128 128.848 837.392 128.896V126.04C835.256 126.04 833.696 126.712 832.832 128.056ZM845.58 139.168C849.564 139.168 852.42 136.432 852.42 132.592C852.42 128.752 849.564 126.04 845.58 126.04C841.644 126.04 838.764 128.752 838.764 132.592C838.764 136.432 841.644 139.168 845.58 139.168ZM845.58 136.6C843.42 136.6 841.788 135.04 841.788 132.592C841.788 130.144 843.42 128.584 845.58 128.584C847.764 128.584 849.396 130.144 849.396 132.592C849.396 135.04 847.764 136.6 845.58 136.6Z" fill="white"/>
                    <path d="M604.6 171.042C607.386 171.042 609.556 168.858 609.556 166.072C609.556 163.286 607.442 161.158 604.628 161.158C601.814 161.158 599.672 163.342 599.672 166.1C599.672 168.858 601.814 171.042 604.6 171.042ZM604.6 170.412C602.164 170.412 600.33 168.508 600.33 166.1C600.33 163.692 602.164 161.788 604.628 161.788C607.092 161.788 608.898 163.636 608.898 166.072C608.898 168.508 607.036 170.412 604.6 170.412ZM604.754 168.984C605.748 168.984 606.574 168.536 607.022 167.836L606.224 167.276C605.874 167.794 605.342 168.032 604.74 168.032C603.676 168.032 602.864 167.276 602.864 166.1C602.864 164.924 603.676 164.168 604.74 164.168C605.342 164.168 605.874 164.406 606.224 164.924L607.022 164.35C606.574 163.664 605.748 163.216 604.754 163.216C603.032 163.216 601.8 164.406 601.8 166.1C601.8 167.794 603.032 168.984 604.754 168.984ZM616.518 169.782L619.514 166.898C620.844 165.624 621.124 164.77 621.124 163.818C621.124 162.138 619.808 161.088 617.764 161.088C616.238 161.088 614.936 161.634 614.18 162.572L615.132 163.398C615.734 162.67 616.588 162.334 617.638 162.334C619.01 162.334 619.724 162.95 619.724 163.958C619.724 164.574 619.528 165.19 618.492 166.198L614.502 170.048V171H621.544V169.782H616.518ZM626.658 171.112C628.94 171.112 630.648 169.292 630.648 166.1C630.648 162.908 628.94 161.088 626.658 161.088C624.362 161.088 622.654 162.908 622.654 166.1C622.654 169.292 624.362 171.112 626.658 171.112ZM626.658 169.866C625.118 169.866 624.054 168.606 624.054 166.1C624.054 163.594 625.118 162.334 626.658 162.334C628.184 162.334 629.248 163.594 629.248 166.1C629.248 168.606 628.184 169.866 626.658 169.866ZM633.813 169.782L636.809 166.898C638.139 165.624 638.419 164.77 638.419 163.818C638.419 162.138 637.103 161.088 635.059 161.088C633.533 161.088 632.231 161.634 631.475 162.572L632.427 163.398C633.029 162.67 633.883 162.334 634.933 162.334C636.305 162.334 637.019 162.95 637.019 163.958C637.019 164.574 636.823 165.19 635.787 166.198L631.797 170.048V171H638.839V169.782H633.813ZM639.43 161.2V162.418H641.642V171H643.028V161.2H639.43ZM654.112 171.112C655.638 171.112 656.954 170.58 657.85 169.572L656.94 168.69C656.184 169.488 655.26 169.866 654.182 169.866C651.97 169.866 650.332 168.27 650.332 166.1C650.332 163.93 651.97 162.334 654.182 162.334C655.26 162.334 656.184 162.698 656.94 163.496L657.85 162.614C656.954 161.606 655.638 161.088 654.126 161.088C651.144 161.088 648.932 163.202 648.932 166.1C648.932 168.998 651.144 171.112 654.112 171.112ZM662.515 171.084C664.741 171.084 666.365 169.502 666.365 167.29C666.365 165.078 664.741 163.51 662.515 163.51C660.289 163.51 658.651 165.078 658.651 167.29C658.651 169.502 660.289 171.084 662.515 171.084ZM662.515 169.908C661.087 169.908 660.009 168.872 660.009 167.29C660.009 165.708 661.087 164.686 662.515 164.686C663.943 164.686 665.007 165.708 665.007 167.29C665.007 168.872 663.943 169.908 662.515 169.908ZM671.401 171.084C673.627 171.084 675.251 169.502 675.251 167.29C675.251 165.078 673.627 163.51 671.401 163.51C669.175 163.51 667.537 165.078 667.537 167.29C667.537 169.502 669.175 171.084 671.401 171.084ZM671.401 169.908C669.973 169.908 668.895 168.872 668.895 167.29C668.895 165.708 669.973 164.686 671.401 164.686C672.829 164.686 673.893 165.708 673.893 167.29C673.893 168.872 672.829 169.908 671.401 169.908ZM681.044 163.51C679.952 163.51 679 163.93 678.398 164.756V163.58H677.11V173.716H678.454V169.88C679.07 170.678 679.994 171.084 681.044 171.084C683.214 171.084 684.796 169.572 684.796 167.29C684.796 165.022 683.214 163.51 681.044 163.51ZM680.932 169.908C679.518 169.908 678.44 168.872 678.44 167.29C678.44 165.722 679.518 164.686 680.932 164.686C682.36 164.686 683.438 165.722 683.438 167.29C683.438 168.872 682.36 169.908 680.932 169.908ZM693.359 167.332C693.359 165.05 691.833 163.51 689.691 163.51C687.549 163.51 685.967 165.092 685.967 167.29C685.967 169.502 687.563 171.084 689.957 171.084C691.189 171.084 692.211 170.664 692.883 169.88L692.141 169.012C691.595 169.614 690.867 169.908 689.999 169.908C688.529 169.908 687.479 169.04 687.311 167.738H693.331C693.345 167.612 693.359 167.444 693.359 167.332ZM689.691 164.644C690.993 164.644 691.931 165.526 692.071 166.772H687.311C687.451 165.512 688.403 164.644 689.691 164.644ZM696.513 164.826V163.58H695.225V171H696.569V167.304C696.569 165.68 697.465 164.798 698.907 164.798C699.005 164.798 699.103 164.798 699.215 164.812V163.51C697.913 163.51 696.989 163.958 696.513 164.826ZM703.054 171.084C705.028 171.084 706.26 170.23 706.26 168.886C706.26 166.002 701.556 167.43 701.556 165.68C701.556 165.092 702.13 164.658 703.306 164.658C704.034 164.658 704.776 164.812 705.448 165.246L706.022 164.182C705.378 163.762 704.286 163.51 703.32 163.51C701.416 163.51 700.226 164.406 700.226 165.736C700.226 168.69 704.916 167.248 704.916 168.914C704.916 169.544 704.398 169.922 703.152 169.922C702.186 169.922 701.178 169.6 700.548 169.152L699.988 170.216C700.604 170.706 701.822 171.084 703.054 171.084ZM708.262 171.084C708.766 171.084 709.186 170.678 709.186 170.118C709.186 169.558 708.766 169.166 708.262 169.166C707.744 169.166 707.31 169.558 707.31 170.118C707.31 170.678 707.744 171.084 708.262 171.084ZM722.39 171H723.86L719.408 161.2H718.022L713.584 171H715.026L716.104 168.55H721.312L722.39 171ZM716.594 167.43L718.708 162.628L720.822 167.43H716.594ZM725.126 171H726.47V160.612H725.126V171ZM729.036 171H730.38V160.612H729.036V171ZM737.994 164.826V163.58H736.706V171H738.05V167.304C738.05 165.68 738.946 164.798 740.388 164.798C740.486 164.798 740.584 164.798 740.696 164.812V163.51C739.394 163.51 738.47 163.958 737.994 164.826ZM743.024 162.152C743.556 162.152 743.934 161.76 743.934 161.256C743.934 160.78 743.542 160.402 743.024 160.402C742.506 160.402 742.114 160.794 742.114 161.284C742.114 161.774 742.506 162.152 743.024 162.152ZM742.352 171H743.696V163.58H742.352V171ZM752.086 163.58V164.728C751.456 163.916 750.448 163.51 749.342 163.51C747.2 163.51 745.576 164.952 745.576 167.094C745.576 169.236 747.2 170.692 749.342 170.692C750.406 170.692 751.372 170.314 752.016 169.544V170.132C752.016 171.812 751.218 172.624 749.468 172.624C748.376 172.624 747.298 172.246 746.612 171.658L745.968 172.694C746.78 173.422 748.152 173.8 749.51 173.8C752.03 173.8 753.36 172.61 753.36 169.992V163.58H752.086ZM749.496 169.516C747.998 169.516 746.934 168.522 746.934 167.094C746.934 165.652 747.998 164.686 749.496 164.686C750.98 164.686 752.044 165.652 752.044 167.094C752.044 168.522 750.98 169.516 749.496 169.516ZM759.89 163.51C758.756 163.51 757.832 163.916 757.272 164.63V160.612H755.928V171H757.272V167.178C757.272 165.568 758.196 164.714 759.624 164.714C760.898 164.714 761.626 165.428 761.626 166.884V171H762.97V166.73C762.97 164.546 761.696 163.51 759.89 163.51ZM769.21 169.6C768.93 169.824 768.552 169.95 768.16 169.95C767.418 169.95 766.998 169.502 766.998 168.704V164.686H769.126V163.58H766.998V161.956H765.654V163.58H764.394V164.686H765.654V168.76C765.654 170.258 766.508 171.084 768.006 171.084C768.608 171.084 769.224 170.916 769.63 170.566L769.21 169.6ZM773.382 171.084C775.356 171.084 776.588 170.23 776.588 168.886C776.588 166.002 771.884 167.43 771.884 165.68C771.884 165.092 772.458 164.658 773.634 164.658C774.362 164.658 775.104 164.812 775.776 165.246L776.35 164.182C775.706 163.762 774.614 163.51 773.648 163.51C771.744 163.51 770.554 164.406 770.554 165.736C770.554 168.69 775.244 167.248 775.244 168.914C775.244 169.544 774.726 169.922 773.48 169.922C772.514 169.922 771.506 169.6 770.876 169.152L770.316 170.216C770.932 170.706 772.15 171.084 773.382 171.084ZM783.316 164.826V163.58H782.028V171H783.372V167.304C783.372 165.68 784.268 164.798 785.71 164.798C785.808 164.798 785.906 164.798 786.018 164.812V163.51C784.716 163.51 783.792 163.958 783.316 164.826ZM794.312 167.332C794.312 165.05 792.786 163.51 790.644 163.51C788.502 163.51 786.92 165.092 786.92 167.29C786.92 169.502 788.516 171.084 790.91 171.084C792.142 171.084 793.164 170.664 793.836 169.88L793.094 169.012C792.548 169.614 791.82 169.908 790.952 169.908C789.482 169.908 788.432 169.04 788.264 167.738H794.284C794.298 167.612 794.312 167.444 794.312 167.332ZM790.644 164.644C791.946 164.644 792.884 165.526 793.024 166.772H788.264C788.404 165.512 789.356 164.644 790.644 164.644ZM798.306 171.084C800.28 171.084 801.512 170.23 801.512 168.886C801.512 166.002 796.808 167.43 796.808 165.68C796.808 165.092 797.382 164.658 798.558 164.658C799.286 164.658 800.028 164.812 800.7 165.246L801.274 164.182C800.63 163.762 799.538 163.51 798.572 163.51C796.668 163.51 795.478 164.406 795.478 165.736C795.478 168.69 800.168 167.248 800.168 168.914C800.168 169.544 799.65 169.922 798.404 169.922C797.438 169.922 796.43 169.6 795.8 169.152L795.24 170.216C795.856 170.706 797.074 171.084 798.306 171.084ZM809.898 167.332C809.898 165.05 808.372 163.51 806.23 163.51C804.088 163.51 802.506 165.092 802.506 167.29C802.506 169.502 804.102 171.084 806.496 171.084C807.728 171.084 808.75 170.664 809.422 169.88L808.68 169.012C808.134 169.614 807.406 169.908 806.538 169.908C805.068 169.908 804.018 169.04 803.85 167.738H809.87C809.884 167.612 809.898 167.444 809.898 167.332ZM806.23 164.644C807.532 164.644 808.47 165.526 808.61 166.772H803.85C803.99 165.512 804.942 164.644 806.23 164.644ZM813.052 164.826V163.58H811.764V171H813.108V167.304C813.108 165.68 814.004 164.798 815.446 164.798C815.544 164.798 815.642 164.798 815.754 164.812V163.51C814.452 163.51 813.528 163.958 813.052 164.826ZM822.962 163.58L820.358 169.53L817.81 163.58H816.409L819.658 171H821.03L824.278 163.58H822.962ZM832.033 167.332C832.033 165.05 830.507 163.51 828.365 163.51C826.223 163.51 824.641 165.092 824.641 167.29C824.641 169.502 826.237 171.084 828.631 171.084C829.863 171.084 830.885 170.664 831.557 169.88L830.815 169.012C830.269 169.614 829.541 169.908 828.673 169.908C827.203 169.908 826.153 169.04 825.985 167.738H832.005C832.019 167.612 832.033 167.444 832.033 167.332ZM828.365 164.644C829.667 164.644 830.605 165.526 830.745 166.772H825.985C826.125 165.512 827.077 164.644 828.365 164.644ZM839.555 160.612V164.7C838.939 163.902 838.015 163.51 836.965 163.51C834.795 163.51 833.213 165.022 833.213 167.29C833.213 169.558 834.795 171.084 836.965 171.084C838.057 171.084 839.009 170.664 839.611 169.824V171H840.899V160.612H839.555ZM837.077 169.908C835.649 169.908 834.571 168.872 834.571 167.29C834.571 165.708 835.649 164.686 837.077 164.686C838.491 164.686 839.569 165.708 839.569 167.29C839.569 168.872 838.491 169.908 837.077 169.908ZM843.764 171.084C844.268 171.084 844.688 170.678 844.688 170.118C844.688 169.558 844.268 169.166 843.764 169.166C843.246 169.166 842.812 169.558 842.812 170.118C842.812 170.678 843.246 171.084 843.764 171.084Z" fill="white"/>
                </svg>


            </footer>

        </>
    );
}