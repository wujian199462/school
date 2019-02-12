package com.school.school.domain;

public class Chinese {
    private String testno;

    private byte[] stuno;

    private byte[] socre;

    public String getTestno() {
        return testno;
    }

    public void setTestno(String testno) {
        this.testno = testno == null ? null : testno.trim();
    }

    public byte[] getStuno() {
        return stuno;
    }

    public void setStuno(byte[] stuno) {
        this.stuno = stuno;
    }

    public byte[] getSocre() {
        return socre;
    }

    public void setSocre(byte[] socre) {
        this.socre = socre;
    }
}