# 🚀 Projet Test Indu - EPSI MOUILLEAU Grégoire

---

## 🏗️ Technologies utilisées
- **Next.js** (Framework React)
- **Jest** (Tests unitaires)
- **CircleCI** (Intégration et Déploiement Continu)
- **Git & GitHub** (Gestion de version avec GitFlow)

---

## 🔄 Workflow GitFlow mis en place
Le projet suit un **workflow GitFlow structuré** avec les branches principales et secondaires :

| Branche         | Rôle |
|----------------|--------------------------------|
| `main`        | Branche de production ✅ |
| `develop`     | Branche de développement principale ✅ |
| `integration` | Branche pour les tests d'intégration ✅ |
| `feature/xxx` | Branches temporaires pour nouvelles fonctionnalités ✅ |
| `hotfix/xxx`  | Branches temporaires pour corrections urgentes ✅ |

---

## ⚙️ Pipeline CircleCI

Le pipeline CI/CD a été mis en place pour automatiser les tâches suivantes :

### 🏗 **1. Build**
- Installation des dépendances (`npm install`)
- Gestion du cache pour optimiser les installations (`restore_cache` & `save_cache`)

### ✅ **2. Tests Unitaires (Jest)**
- Exécution des tests avec `npm run test:ci`
- Stockage des résultats de tests dans CircleCI
- Vérification que Jest est bien installé

### 🚀 **3. Déploiement selon l’environnement**
| Environnement  | Branche       | Action |
|---------------|--------------|--------|
| **Développement** | `develop`   | Déploiement de test |
| **Intégration**   | `integration` | Déploiement de validation |
| **Production**    | `main`       | Déploiement final |
| **Feature Branches** | `feature/xxx` | Exécute uniquement les tests |
| **Hotfix Branches**  | `hotfix/xxx`  | Exécute uniquement les tests |

---

## ✅ Tests des branches `feature/xxx` et `hotfix/xxx`
- **Branche `feature/test-ci`** créée et testée avec succès sur CircleCI 🟢
- **Branche `hotfix/test-ci`** également testée avec succès sur CircleCI 🟢
- Le pipeline s'exécute automatiquement pour ces branches et exécute les **tests Jest** ✅

---

## 🛠️ Instructions pour lancer le projet

1️⃣ **Cloner le projet**
```sh
git clone https://github.com/Gregoire-Mouilleau/Epsi_AtelierIndu.git
cd Epsi_AtelierIndu
