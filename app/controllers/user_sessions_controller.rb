class UserSessionsController < ApplicationController
  before_action :set_user_session, only: [:show, :edit, :update, :destroy]

  # GET /user_sessions
  # GET /user_sessions.json
  def index
    @user_sessions = UserSession.all
  end

  # GET /user_sessions/1
  # GET /user_sessions/1.json
  def show
  end

  # GET /user_sessions/new
  def new
    @user_session = UserSession.new
  end

  # GET /user_sessions/1/edit
  def edit
  end

  # POST /user_sessions
  # POST /user_sessions.json
  def create
    @user_session = UserSession.new(user_session_params)

    if @user_session.save
      flash[:success] = "Account registered!"
      redirect_to users_path
    else
      render :action => :new
    end
  end

  # PATCH/PUT /user_sessions/1
  # PATCH/PUT /user_sessions/1.json
  def update
    respond_to do |format|
      if @user_session.update(user_session_params)
        format.html { redirect_to @user_session, notice: 'User session was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_session }
      else
        format.html { render :edit }
        format.json { render json: @user_session.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_sessions/1
  # DELETE /user_sessions/1.json
  def destroy
    current_user_session.destroy
    redirect_to login_url
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_session
      @user_session = current_user_session
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_session_params
      params.require(:user_session).permit(:email, :password, :remember_me)
    end
end
