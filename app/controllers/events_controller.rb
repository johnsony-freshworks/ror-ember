class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  def index
    if params[:category].present?
      @events = Event
                  .limit(params[:limit])
                  .offset(params[:offset])
                  .where(:category => params[:category], public: true)
                  .order('start DESC')
      render json: @events, include: ['user', 'category', 'comment'], meta: { 
                    total: Event.where(:category => params[:category], public: true).count 
                  }
    else
      @events = Event.limit(params[:limit]).offset(params[:offset]).where(public: true).order('start DESC')
      render json: @events, include: ['user', 'category', 'comment'], meta: { total: Event.where(public: true).count }
    end
  end

  # GET /events/1
  def show
    render json: @event
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    if @event.destroy
      flash[:notice] = "deleted"
      head :no_content
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params)
    end
end
