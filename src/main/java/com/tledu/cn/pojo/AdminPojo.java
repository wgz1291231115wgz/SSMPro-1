package com.tledu.cn.pojo;

public class AdminPojo {

    private String id;
    private String imgs;
    private String acc;
    private String pwd;
    private String email;
    private String phone;

    public AdminPojo() {
    }

    public AdminPojo(String acc, String pwd) {
        this.acc = acc;
        this.pwd = pwd;
    }

    public AdminPojo(String id, String imgs, String acc, String pwd, String email, String phone) {
        this.id = id;
        this.imgs = imgs;
        this.acc = acc;
        this.pwd = pwd;
        this.email = email;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImgs() {
        return imgs;
    }

    public void setImgs(String imgs) {
        this.imgs = imgs;
    }

    public String getAcc() {
        return acc;
    }

    public void setAcc(String acc) {
        this.acc = acc;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "AdminPojo{" +
                "id='" + id + '\'' +
                ", imgs='" + imgs + '\'' +
                ", acc='" + acc + '\'' +
                ", pwd='" + pwd + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
