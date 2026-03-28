// Les formules KaTeX doivent être utilisées telles quelles (chaînes exactes).
export const formulas = {
  UAB_VA_VB:        "U_{AB} = V_A - V_B",
  UAB_neg_UBA:      "U_{AB} = -U_{BA}",
  UAB_gt0:          "U_{AB} > 0",
  UAB_lt0:          "U_{AB} < 0",
  U_C_n_n0:         "U = C \\cdot \\dfrac{n}{n_0}",
  DeltaU:           "\\Delta U = \\dfrac{C \\times \\text{classe}}{100}",
  DeltaU_over_U:    "\\dfrac{\\Delta U}{U} = \\dfrac{C \\times \\text{classe}}{100 \\cdot U}",
  UG_sum:           "U_G = U_1 + U_2 + \\cdots + U_n",
  UG_equal:         "U_G = U_1 = U_2 = \\cdots = U_n",
  U_SV_Y:           "U = S_V \\times Y",
  Umax:             "U_{max} = n_{\\text{div\\_vert}} \\times S_V",
  Ueff:             "U_{eff} = \\dfrac{U_{max}}{\\sqrt{2}} \\approx 0{,}707 \\times U_{max}",
  T:                "T = n_{\\text{div\\_horiz}} \\times S_H",
  f:                "f = \\dfrac{1}{T}",
} as const;
