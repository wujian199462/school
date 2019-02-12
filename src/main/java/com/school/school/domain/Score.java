package com.school.school.domain;

public class Score {
    private String stuno;

    private String name;

    private String testName;

    private String chinese;

    private String math;

    private String english;

    private String physical;

    private String chemical;

    private String biological;

    private String geographic;

    private String political;

    private String history;

    public String getStuno() {
        return stuno;
    }

    public void setStuno(String stuno) {
        this.stuno = stuno == null ? null : stuno.trim();
    }

    public String getChinese() {
        return chinese;
    }

    public void setChinese(String chinese) {
        this.chinese = chinese == null ? null : chinese.trim();
    }

    public String getMath() {
        return math;
    }

    public void setMath(String math) {
        this.math = math == null ? null : math.trim();
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english == null ? null : english.trim();
    }

    public String getPhysical() {
        return physical;
    }

    public void setPhysical(String physical) {
        this.physical = physical == null ? null : physical.trim();
    }

    public String getChemical() {
        return chemical;
    }

    public void setChemical(String chemical) {
        this.chemical = chemical == null ? null : chemical.trim();
    }

    public String getBiological() {
        return biological;
    }

    public void setBiological(String biological) {
        this.biological = biological == null ? null : biological.trim();
    }

    public String getGeographic() {
        return geographic;
    }

    public void setGeographic(String geographic) {
        this.geographic = geographic == null ? null : geographic.trim();
    }

    public String getPolitical() {
        return political;
    }

    public void setPolitical(String political) {
        this.political = political == null ? null : political.trim();
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history == null ? null : history.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }
}
