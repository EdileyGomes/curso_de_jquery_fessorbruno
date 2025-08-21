import sys
from PySide6.QtWidgets import QApplication, QWidget, QPushButton
from PySide6.QtCore import QPropertyAnimation, QRect, QEasingCurve, QParallelAnimationGroup
from PySide6.QtGui import QColor, QPalette

class SmoothFuturisticButton(QPushButton):
    def __init__(self, text, parent=None):
        super().__init__(text, parent)
        self.original_geometry = None
        self.anim_group = None
        self.original_color = self.palette().color(QPalette.Button)
        self.hover_color = QColor("#1E90FF")

    def enterEvent(self, event):
        if not self.original_geometry:
            self.original_geometry = self.geometry()

        # Animação de tamanho (pulso suave)
        size_anim = QPropertyAnimation(self, b"geometry")
        size_anim.setStartValue(self.original_geometry)
        size_anim.setEndValue(self.original_geometry.adjusted(-10, -10, 10, 10))
        size_anim.setDuration(1500)  # mais devagar
        size_anim.setEasingCurve(QEasingCurve.InOutSine)
        size_anim.setLoopCount(-1)

        # Animação de cor suave
        self.color_anim = QPropertyAnimation(self, b"color_value")
        self.color_anim.setStartValue(0)
        self.color_anim.setEndValue(255)
        self.color_anim.setDuration(2000)  # mais lenta
        self.color_anim.setLoopCount(-1)
        self.color_anim.valueChanged.connect(self.update_color)

        # Combinar animações
        self.anim_group = QParallelAnimationGroup()
        self.anim_group.addAnimation(size_anim)
        self.anim_group.addAnimation(self.color_anim)
        self.anim_group.start()

        super().enterEvent(event)

    def leaveEvent(self, event):
        if self.anim_group:
            self.anim_group.stop()
        if self.original_geometry:
            self.setGeometry(self.original_geometry)
        self.setStyleSheet(f"background-color: {self.original_color.name()}; color: white; border-radius: 12px;")
        super().leaveEvent(event)

    def update_color(self, value):
        r = int(self.hover_color.red() * value / 255)
        g = int(self.hover_color.green() * value / 255)
        b = int(self.hover_color.blue() * value / 255)
        self.setStyleSheet(f"background-color: rgb({r},{g},{b}); color: white; border-radius: 12px;")

# Aplicativo
app = QApplication(sys.argv)
janela = QWidget()
janela.setWindowTitle("Botão Pulsante Harmônico")
janela.setGeometry(100, 100, 500, 400)

botao = SmoothFuturisticButton("Passe o mouse", janela)
botao.setGeometry(200, 170, 120, 60)
botao.setStyleSheet("color: white; background-color: #333333; font-size: 16px; font-weight: bold; border-radius: 12px;")

janela.show()
sys.exit(app.exec())
